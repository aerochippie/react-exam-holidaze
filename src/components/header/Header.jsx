import React, { useState } from 'react'
import "./header.css"

export const Header = () => {
    const [price, setPrice] = useState(0);
    const [venueName, setVenueName] = useState("");
    const [location, setLocation] = useState("");
    // console.log(price);
    // console.log(venueName);
    // console.log(location);
    return (
        <div className='header'>

            <div className="header-container">



                <div className="header-center">
                    <div className="header-hero-text">
                        <h1> Vacation <br /> <strong> your  </strong> way.</h1>
                    </div>
                    <div className="header-search">



                        <div className="header-inputs">
                            <label> Venue Name
                                <input type="text" name="" id="" value={venueName} onChange={(e) => setVenueName(e.target.value)}/></label>
                            <label> Location
                                <input type="text" name="" id="" value={location} onChange={(e) => setLocation(e.target.value)}/></label>
                            <label> Price
                                <input type="range" max={3000} value={price} onChange={(e) => setPrice(e.target.valueAsNumber)}/></label>
                        </div>
                        <button type='button'> Let's go!</button>
                    </div>
                </div>


            </div>
            <div className="header-image">
                <img src="/img/hero_2.jpg" alt="" />
            </div>
        </div>

    )
}
