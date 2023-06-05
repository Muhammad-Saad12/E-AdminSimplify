
import React from 'react';
import { Login, Dashboard, Sellers, SellerEdit, Landingpage, Profile, LoginForm, ProfileMUI, SellerMain, SellerEditMUI, Customer, CustomerEdit, Orders, OrderProgress } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/" element={<Landingpage />} /> */}
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/Sellers" element={<Sellers /> } /> */}
        {/* <Route path="/SellerEdit" element={<SellerEdit /> } /> */}
        {/* <Route path="/Profile" element={<Profile /> } /> */}

        <Route path="/" element={<Dashboard /> } />
        <Route path="/login" element={<LoginForm /> } />
        <Route path="/Profile" element={<ProfileMUI /> } />
        <Route path="/Sellers" element={<SellerMain /> } />
        <Route path="/SellersEdit" element={<SellerEditMUI /> } />
        <Route path="/Customers" element={<Customer /> } />
        <Route path="/CustomerEdit" element={<CustomerEdit /> } />
        <Route path="/CustomerEdit" element={<CustomerEdit /> } />
        <Route path="/Orders" element={<Orders /> } />
        <Route path="/OrdersProgress" element={<OrderProgress /> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


