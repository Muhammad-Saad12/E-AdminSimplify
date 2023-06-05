import React from 'react'
import {NavbarRS} from '../../../components'
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

import { useNavigate} from 'react-router-dom';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  } from 'mdb-react-ui-kit';
import { useState, useEffect  } from 'react'



const SellerEdit = () => {
    const navigate = useNavigate();
    
    const updateAPIData = async (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/sellers/update', {
             firstName,
             lastName,
             age,
             company,
             username, 
             password
        })
        navigate('../sellers')

//          await fetch('/sellers/update/',{

//           method: 'put',
//           body: JSON.stringify({firstName , lastName, age, company, username,password}),
//           headers: {'Content-Type': 'Application/json'}

//         });

        
    }

        

    const Location = useLocation();
    const data = Location.state;

    // console.log(data);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setage] = useState('');
    const [company, setcompany] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    useEffect(() =>{
        setFirstName(data.sellerfname)
        setLastName(data.sellerlname)
        setcompany(data.sellercompany)
        setage(data.sellerage)
        setusername(data.sellerusername)
        setpassword(data.sellerpass)

    },[])
    
    // console.log(data)
    
//      useEffect(() => {
        
//         setFirstName(localStorage.getItem('FirstName'));
//         setLastName(localStorage.getItem('LastName'));
//         setage(localStorage.getItem('Age'));
//         setcompany(localStorage.getItem('Company Name'));
//         setusername(localStorage.getItem('username'));
//         setpassword(localStorage.getItem('password'));
        
// }, []);

  return (
    <div>
        <NavbarRS></NavbarRS>
        <br></br>
        <br></br>
        <h2>EDIT A SELLER</h2>
        <br></br>
        <br></br>
       
        <div>
        <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='fname' label='First Name'  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </MDBCol>
        <MDBCol>
          <MDBInput id='lname' label='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </MDBCol>
        </MDBRow>

        <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='cname' label='Company Name' value={company}  onChange={(e) => setcompany(e.target.value)} />
        </MDBCol>
        <MDBCol>
          <MDBInput id='age' label='Age'  value={age}  onChange={(e) => setage(e.target.value)} />
        </MDBCol>
        </MDBRow>

        <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='username' label='User Name' value={username}  onChange={(e) => setusername(e.target.value)} />
        </MDBCol>
        <MDBCol>
          <MDBInput id='password' label='Password' value={password}  onChange={(e) => setpassword(e.target.value)} />
        </MDBCol>
        </MDBRow>

    
        <MDBBtn onClick={updateAPIData} type='submit' className='mb-4' block>
            Update
        </MDBBtn>
    </div>


        
    </div>    

  )
}

export default SellerEdit