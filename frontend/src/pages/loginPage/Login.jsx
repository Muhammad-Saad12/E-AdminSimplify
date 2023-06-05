import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './login.css'
import { useState, useEffect  } from 'react'
import { useNavigate} from 'react-router-dom';
import axios from "axios";



import logo from '../../assets/logo.svg'
import sidePanel from '../../assets/adminPanel.svg'

// async function loginUser(credentials) {
//   return fetch('/login', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }; 


const Login = () => {

  // const [text, setText] = useState("");
  // const [author, setAuthor] = useState("");

  // function getQuote() {
  //   axios.get("http://localhost:5000/login",  { 
  //     crossdomain: true 
  //   }).then(response => {
  //     setText(response.data.text);
  //     setAuthor(response.data.author);
  //   });
  // }  

  // const [Login, setLogin] = useState(false)

  // const configuration = {
  //   method: "post",
  //   url: "http://localhost:5000/login",
  //   data: {
  //     username,
  //     password,
  //   },
  // };

// const handleSubmit = (e) => {
//   e.preventDefault()
//   axios.post('http://localhost:5000/login', {
//     username,
//     password
//   })
//   .then(function (response) {
//     setLogin(true);
//   });

  // axios(configuration)
  //     .then((result) => {
  //       setLogin(true);
  //     })
  //     .catch((error) => {
  //       error = new Error();
  //     });


  const navigate = useNavigate();

  // const admin = [{ username: "shershah", password: "admin123" }];

  const [admin, setadmin] = useState([])

  useEffect(() => {
    (async () =>{ axios.get("http://localhost:5000/login/admin",  { 
      crossdomain: true 
    }).then(response => {
        setadmin(response.data)
      // setText(response.data.text);
      // setAuthor(response.data.author);
    });
      
   })();
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const account = admin.find((user) => user.username === username);
    // console.log(account.password)
    if (account && account.password === password) {
        // setauthenticated(true)
        // localStorage.setItem("authenticated", true);
        navigate("/Dashboard");
    }
  };


const [username, setusername] = useState("");
const [password, setpassword] = useState("");

  return (
    <div>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <img src={logo} alt="logo"/>
                  </div>
                  

                  {/* <button onClick={getQuote}>
                      Generate Quote
                      </button>
                  <h1>{text}</h1>
                  <h3>{"-" + author}</h3> */}
                  
                  <form action=''>
                    <div className="form-outline mb-4">
                      <input type="text" value={username}  className="form-control" name="Username" 
                        onChange={(e) => setusername(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                    <input type="text" className="form-control" name="password"
                      onChange={(e) => setpassword(e.target.value)}
                      />
                    </div>
                    
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button type = "submit" className ="btn bg-custom btn-block" onClick={handleSubmit}>
                        {/* <input type="submit" value="Submit" /> */}
                        Submit
                      </button>
                    </div>
                  </form>

                </div>
                
              </div>
              <div className="col-lg-6 d-flex align-items-center bg-custom rounde">
                <div>
                    <img src={sidePanel} className="sideImg" alt="logo"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  )}

export default Login