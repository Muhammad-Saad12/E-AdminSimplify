import React from 'react'
import axios from "axios";
import { useState, useEffect  } from 'react'
import {NavbarRS} from '../../components'
import { Link } from 'react-router-dom';

import { useNavigate} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Button } from 'rsuite';

import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';


const Sellers = () => {
    const [sellers, setsellers] = useState([])

//  function getList() {
//   axios.get("http://localhost:5000/sellers/list",  { 
//     crossdomain: true 
//   }).then(response => {
//       setsellers(response.data)
//     // setText(response.data.text);
//     // setAuthor(response.data.author);
//   });
// }  

const navigate = useNavigate();

const handleSubmitEdit = (e) => {
    navigate('/SellerEdit')
 };

const handleSubmitDelete = (name) => {
    
    // e.preventDefault()
   
    axios.delete('http://localhost:5000/sellers/delete', 
        { data: { answer: name } }
    )

    // navigate('/Sellers')
};




useEffect(() => {
  (async () =>
  {
    axios.get("http://localhost:5000/sellers/list",  { 
    crossdomain: true 
  }).then(response => {
      setsellers(response.data)
    // setText(response.data.text);
    // setAuthor(response.data.author);
  });
    
 })();
},[]);




  return (
    <div>
        <NavbarRS></NavbarRS>
        <br></br>
    <br></br>
        <h2>SELLERS</h2>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

     <MDBTable align='middle'>
      <MDBTableHead dark>
        <tr >
          <th scope='col'>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Company</th>
          <th scope='col'>Username</th>
          <th scope='col'>Password</th>
          <th scope='col'>Edit</th>
          <th scope='col'>Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {sellers.map(arrayData=>{
            return(
                    <tr className='table-primary'>
                        <td>{arrayData.Firstname}</td>
                        <td>{arrayData.Lastname}</td>
                        <td>{arrayData.Age}</td>
                        <td>{arrayData.CompanyName}</td>
                        <td>{arrayData.username}</td>
                        <td>{arrayData.password}</td>
                        <td>
                        <Link to= '/SellerEdit' state={ {sellerfname :arrayData.Firstname , sellerlname :arrayData.Lastname , sellercompany :arrayData.CompanyName 
                            ,sellerage :arrayData.Age ,sellerusername :arrayData.username ,sellerpass :arrayData.password , } }>
                            {/* <td><Button color='link' size='sm' onClick={() => setData()}> Edit</Button></td> */}
                            <td><Button color='link' size='sm' > Edit</Button></td>
                        </Link>
                        </td>
                       <td>
                       {/* <Link to= '/SellerEdit' state={ {sellerfname :arrayData.Firstname , sellerlname :arrayData.Lastname , sellercompany :arrayData.CompanyName  */}
                            {/* ,sellerage :arrayData.Age ,sellerusername :arrayData.username ,sellerpass :arrayData.password , } }> */}
                            {/* <td><Button color='link' size='sm' onClick={() => setData()}> Edit</Button></td> */}
                            <td><Button color='link' size='sm' onClick={() => handleSubmitDelete(arrayData.Firstname)} > Delete</Button></td>
                        {/* </Link> */}
                       </td>
                    </tr>
            )
        }
        )}
        
      </MDBTableBody>
    </MDBTable>  

    </div>
  )
}

export default Sellers