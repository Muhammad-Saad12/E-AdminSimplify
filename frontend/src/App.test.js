import { render, screen } from '@testing-library/react';
import { ListItemMUI, CardMUI, Navbar, Sidebar, Progressbar } from './components';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  Dashboard  from './pages/dashboardMUI/Dashboard'
import  Customer  from './pages/Customers/Customer';
import  SellerMain  from './pages/Sellers/SellerMain';
import  Orders  from './pages/Orders/Orders';
import  ProfileMUI  from './pages/Profile/ProfileMUI';
import { Nav } from 'rsuite';




// // FOR INDIVIDUAL COMPONENTS
// test('list', () => {
//     render(<ListItemMUI />);
//     const linkElement = screen.getByTestId("list");
//     expect(linkElement).toBeInTheDocument();
//   });

// test('card', () => {
//     render(<CardMUI />);
//     const linkElement = screen.getByTestId("card");
//     expect(linkElement).toBeInTheDocument();
//   });

// test('navbar', () => {
//     render(
//         <BrowserRouter>
//             <Navbar />
//         </BrowserRouter>
//     );
//     const linkElement = screen.getByTestId("navbar");
//     expect(linkElement).toBeInTheDocument();
//   });

// test('sidebar', () => {
//     render(
//         <BrowserRouter>
//             <Sidebar />
//         </BrowserRouter>
//     );
//     const linkElement = screen.getByTestId("sidebar");
//     expect(linkElement).toBeInTheDocument();
//   });

//   test('progress bar', () => {
//     render(<Progressbar />);
//     const linkElement = screen.getByTestId("progbar");
//     expect(linkElement).toBeInTheDocument();
//   });


// // FOR ALL PAGES
//   test('dashboard', () => {
//     render(
//     <BrowserRouter>
//     <Dashboard />
//     </BrowserRouter>);
//     const linkElement = screen.getByTestId("dashboard");
//     expect(linkElement).toHaveTextContent('Dashboard');
//   });

//   test('customer dashboard', () => {
//     render(
//     <BrowserRouter>
//         <Customer />
//     </BrowserRouter>);
//     const linkElement = screen.getByTestId("customer");
//     expect(linkElement).toHaveTextContent('Customers');
//   });

//   test('seller dashboard', () => {
//     render(
//     <BrowserRouter>
//         <SellerMain />
//     </BrowserRouter>);
//     const linkElement = screen.getByTestId("seller");
//     expect(linkElement).toBeInTheDocument();
//   });

//   test('orders dashboard', () => {
//     render(
//     <BrowserRouter>
//         <Orders />
//     </BrowserRouter>);
//     const linkElement = screen.getByTestId("orders");
//     expect(linkElement).toBeInTheDocument();
//   });

//   test('profile', () => {
//     render(
//     <BrowserRouter>
//         <ProfileMUI />
//     </BrowserRouter>);
//     const linkElement = screen.getByTestId("profile");
//     expect(linkElement).toBeInTheDocument();
//   });


//TEST CASES FOR MICRO COMPONENTS

test('button of sidebar', () => {
    const {getByTestId} = render(
    <BrowserRouter>
        <Sidebar />
    </BrowserRouter>
    );
   
    const foundButton = getByTestId("button");
 
    expect(foundButton).toBeTruthy();

} )

test('profile button of navbar', () => {
    const {getByTestId} = render(
    <BrowserRouter>
        <Navbar />
    </BrowserRouter>
    );
   
    const foundButton = getByTestId("button");
 
    expect(foundButton).toBeTruthy();

} )
