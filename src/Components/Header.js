import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <nav>Get Ready To Complete Your Daily Goals</nav>
    <div className='header'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/user/tempid'>User</Link>
    </div>
    </>
  )
}

export default Header


//* use rfc or rfce or rafc for code snippet
  //* we can also use export without default but there we need to pass name in string and import them in string
  //* plus there can be only one default component


  
  //*Header Component Explanation:
//*This is a simple functional component (Header) that renders a navigation bar.
//*It displays a static message "Get Ready To Complete Your Daily Goals".
