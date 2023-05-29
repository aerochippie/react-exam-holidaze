import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./footer.css"
import { FiArrowRight } from 'react-icons/fi';


export const Footer = () => {
  return (
    <div className="footer-container">

    <div className="deal-banner"></div>
    <div className="footer">
        <div className="footer-top">
<div className="footer-image">
<img src="/img/leaf_left.png" alt="" />
</div>
<div className="newsletter">
    <div className="footer-title">
        <h3> Stay in touch with us</h3>
        <p> sign up for the newsletter</p>
    </div>
    <div className="arrow-icon">
        <FiArrowRight/>
    </div>
    <div className="sign-up">
        <label htmlFor="">
        <input type="text" placeholder='Email' />
        </label>
    </div>
</div>
<div className="footer-image">

    <img src="/img/leaf_right.png" alt="" />
</div>

        </div>
        <div className="footer-bottom">

<div className="footer-menu">




<ul>
    <h4>For Customers</h4>
    <li><Link to={"/Login"}> Login </Link></li>
    <li><Link to={"/Register"}> Register </Link></li>
    <li><Link to={"/Dashboard"}> Dashboard </Link></li>

</ul>
<ul>
    <h4>Company</h4>
    <li href="">About Us</li>
    <li href="">Career</li>
    <li href="">Help</li>
</ul>
<div className="footer-logo">
    <img src="/img/logo_white_fill.png" alt="" />
</div>
<ul>
    <h4>More</h4>
    <li href="">Privacy Policy</li>
    <li href=""> Terms and Conditions</li>
    <li href="">Press</li>
</ul>
<ul>
    <h4>More</h4>
    <li href="">Privacy Policy</li>
    <li href=""> Terms and Conditions</li>
    <li href="">Press</li>
</ul>




</div>
<div className="footer-copy">

<p>Holidaze is part of Vacation Booking AS, the world leader in online travel & related services. </p>
<p>Made with LOVE by GitHub/aerochippie @ 2023 </p>



</div>

        </div>
    </div>


    </div>
  )
}
