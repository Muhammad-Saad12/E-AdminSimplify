const mongoose = require("mongoose");
const session=require('express-session');
const passport = require('passport');
require('./auth')
require("dotenv").config();
const express = require('express')
const app = express()

app.use(session(
  {
    secret:process.env.SESSION_SECRET,
}
  
  ))
app.use(passport.initialize())
app.use(passport.session())




const cors = require('cors');

const port = process.env.PORT || 5000
app.use(express.json())


app.use(cors());






mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB Atlas");
});

mongoose.connection.on("error", (err) => {
  console.error(`Error while connecting to MongoDB Atlas: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB Atlas");
});

app.use(express.urlencoded({extended:false}))


function isLoggedIn(req, res, next) {
  if (req.user && req.user.emails && req.user.emails[0].value === process.env.AUTHORIZE_EMAIL) {
    return next();
  } else {
    return res.sendStatus(401);
  }
}





app.get('/', (req, res) => {
  res.send('<a href="/admin-panel">Authenticate with Google</a>');
})

app.get('/admin-portal', isLoggedIn, (req, res) => {

    res.send(`Hello ${req.user.displayName}`);
 
});



app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    req.session.destroy();
    res.send('Goodbye!');
  });
});




app.get('/admin-panel',
    passport.authenticate('google',{
      scope:['email','profile'],
      
    })
)

app.get('/auth/admin',
passport.authenticate('google',{
  failureRedirect:'/failed',
  successRedirect:'/admin-portal'
}),

)

app.get('/failed',(req,res)=>{

  try{
    req.session.destroy();
  }catch(err){
    console.log(err)
  }

  res.send('You failed to login')
  
 
})




app.listen(port, ()=>{ console.log(`App listening on port ${port}`)

})