import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <Link to='/' className='logo'>Exclusive</Link>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/blog'>Blog</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <button className='login'>Login</button>

    </header>
  )
}
export default Header