const session=require('express-session');
const passport = require('passport');
require('../auth')
require("dotenv").config();


// middleware
function isLoggedIn(req, res, next) {
    if (
      req.user &&
      req.user.emails &&
      req.user.emails[0].value === process.env.AUTHORIZE_EMAIL
    ) {
      return next();
    } else {
      return res.sendStatus(401);
    }
  }

const mainPage=(req, res) => {
    res.send('<a href="/admin-panel">Authenticate with Google</a>');
  };

//   app.get("/", (req, res) => {
//     res.send('<a href="/admin-panel">Authenticate with Google</a>');
//   });
  
const adminPortal=(req, res) => {
    res.send(`Hello ${req.user.displayName}`);
  }

//   app.get("/admin-portal", isLoggedIn, (req, res) => {
//     res.send(`Hello ${req.user.displayName}`);
//   });

const logout=(req, res) => {
    req.logout((err) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      req.session.destroy();
      res.send("Goodbye!");
    });
  }

//   app.get("/logout", (req, res) => {
//     req.logout((err) => {
//       if (err) {
//         console.error(err);
//         return next(err);
//       }
//       req.session.destroy();
//       res.send("Goodbye!");
//     });
//   });

const adminPanel=( passport.authenticate("google", {
    scope: ["email", "profile"],
    
  }));

//   app.get(
//     "/admin-panel",
//     passport.authenticate("google", {
//       scope: ["email", "profile"],
//     })
//   );

const authAdmin=(passport.authenticate("google", {
    failureRedirect: "/failed",
    successRedirect: "/admin-portal",
  }));

//   app.get(
//     "/auth/admin",
//     passport.authenticate("google", {
//       failureRedirect: "/failed",
//       successRedirect: "/admin-portal",
//     })
//   );

const failed=(req, res) => {
    try {
      req.session.destroy();
    } catch (err) {
      console.log(err);
    }
  
    res.send("You failed to login");
  }

const check=(req,res)=>{
    return res.status(402).json({message:"You are logged in"})
}

//   app.get("/failed", (req, res) => {
//     try {
//       req.session.destroy();
//     } catch (err) {
//       console.log(err);
//     }
  
//     res.send("You failed to login");
//   });


module.exports={mainPage,adminPortal,isLoggedIn,logout,adminPanel,authAdmin,failed,check}