import React from 'react'
import { HiLocationMarker } from 'react-icons/hi';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdPets } from 'react-icons/md';
import { FaParking } from 'react-icons/fa';
import { MdOutlineFastfood } from 'react-icons/md';
import './card.css'
import { Navigate, useNavigate } from "react-router-dom";

export const Card = (props) => {
    const { id, name, country, price, wifi, parking, breakfast, pets, description, image } = props;
    const navigate = useNavigate();
    function handleClick(){
        navigate(`/detail/${id}`)
    }
    return (
       <> 
            <div className="card-container">


                <div className="card-image">
                    <img src={image} alt="" />
                </div>

                <div className="card-top">
                    <h3> {name} </h3>
                    <span> <HiLocationMarker /> {country}</span>
                </div>

                <div className="card-middle">
                    <div className="card-icons">
                        {wifi === true && <AiOutlineWifi />}
                        {pets === true && <MdPets />}
                        {parking === true && <FaParking />}
                        {breakfast === true && <MdOutlineFastfood />}
                        <span> {price}$ / Night</span>
                    </div>
                   
                </div>
                <div className="card-bottom">
                    <p> {description} </p>
                    <div className="card-button">
                    <button onClick={handleClick}> Details </button>
                </div>
                </div>
               
            </div>
          
            </>
    )
}
