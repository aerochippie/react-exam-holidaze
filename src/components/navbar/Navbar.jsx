import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import { IconContext } from "react-icons";
import { AiOutlineLogin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"

export const Navbar = () => {
    return (
        <IconContext.Provider value={{ className: "nav-react-icons" }}>
        <div className='navbar'>
            <div className="nav-container">
                <div className="nav-menu">
                    <div className="nav-links">
                        
                    <Link to="/" > Home </Link> 
                        <a href='/Venues'> Venues </a>
                        <a href='/'> About </a>
                        <Link to="/Login" > Login   <AiOutlineLogin/>  </Link> 
                         <Link to="/Dashboard">  <BiUserCircle/>  </Link> 
                    </div>
                    <div className="nav-logo">
                        <img src="/img/logo_black_fill.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
        </IconContext.Provider>
    )
}
