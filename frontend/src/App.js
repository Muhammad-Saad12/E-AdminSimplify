
import React from 'react';
import { Login, Dashboard,  SellerEdit, Landingpage, Profile, LoginForm, ProfileMUI,  SellerEditMUI, Customer, Orders, OrderProgress,Policy,PolicyEdit,AddPolicy,Analytics,Sellers,AddSeller,SortSellers,AddCustomer,SortCustomers } from './pages';
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
        {/* Seller */}
        <Route path="/Sellers" element={<Sellers /> } />
        <Route path="/AddSeller" element={<AddSeller /> } />
        <Route path="/SortSellers" element={<SortSellers /> } />
        {/* <Route path="/SellersEdit" element={<SellerEditMUI /> } /> */}
        <Route path="/Customers" element={<Customer /> } />
        <Route path="/AddCustomer" element={<AddCustomer /> } />
        <Route path="/SortCustomers" element={<SortCustomers /> } />
        {/* <Route path="/CustomerEdit" element={<CustomerEdit /> } /> */}
        {/* <Route path="/CustomerEdit" element={<CustomerEdit /> } /> */}
        <Route path="/Orders" element={<Orders /> } />
        <Route path="/OrdersProgress" element={<OrderProgress /> } />
        {/* Policy */}
        <Route path="/Policy" element={<Policy /> } />
        <Route path="/PolicyEdit/:policyId" element={<PolicyEdit /> } />
        <Route path="/create-policy" element={<AddPolicy /> } />
        {/* Analytics */}
        <Route path="/Analytics" element={<Analytics /> } />
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


