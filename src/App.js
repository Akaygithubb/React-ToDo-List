import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Footer';
import User from "./Components/User";
//! 1st letter need to be capital


//* we can use javascript any where in the file except return function
function App() {
  return (
    <Router>
    <Header/>

    
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:id' element={<User/>}/>
       //* user/add and user:id are considered same therefore add one should be place above as it is a path 
       
      
      </Routes>
   
      <Footer/>
     </Router>
     
  );

  //* <Route> component with path='/user/:id' defines a route that matches any URL starting with /user/ followed by a dynamic segment (:id).
 //*When the URL matches, it renders the <User /> component.
  //* here we use classname instead of class
}

export default App;


//! React Router (react-router-dom) is used for client-side routing in React applications.
//!BrowserRouter wraps the application to enable routing.
//!Routes and Route components are used to define routes and map URL paths to //!corresponding components.
//!Components (Header, Home, About, Contact) are rendered conditionally based on //!the current URL path specified in <Route> components.


//*This is the main component (App) of your React application.
//*It renders two components: Header and Home.
//*It uses Header for displaying a navigation header and Home for displaying the main content related to daily goals.
