import React, { useEffect, useState} from 'react'
import axios from "../../api/axios"
import { Navbar } from '../../components/navbar/Navbar';
import { Header } from '../../components/header/Header';
import { MdOutlineAdd } from "react-icons/md"
import { Card } from '../../components/card/Card';
import { Link, useNavigate } from "react-router-dom";
import { Profile } from '../../components/profile/Profile';
import { ProfileUtils } from '../../components/profileUtils/ProfileUtils';
import { VenuesManaged } from '../../components/venuesManaged/VenuesManaged';
import { Footer } from '../../components/footer/Footer';
import { ProfileBookings } from '../../components/profileBookings/ProfileBookings';

export const Dashboard = () => {


    const isLoggedIn = localStorage.getItem("isManager");
    const isManager = localStorage.getItem("isManager");
    const navigate = useNavigate();
    const handleLogout = () => { 
        localStorage.clear()
        navigate(`/`)
     }
    console.log(isManager)
    return (

        <>
            <Navbar />
            <Header />



            {isLoggedIn === null && <p>  You have to <Link to={"/Login"}>  log in </Link> to view your dashboard!</p>}


            {isManager === "false" &&
                <>
                    <Profile />
                    <h2> You have upcoming bookings at venue(s):</h2>
                    <ProfileBookings/>
                    <p> Customer</p>  <button onClick={handleLogout}> log out  </button>

                </>

            }


            {isManager === "true" &&
                <>
                    <Profile />
                    <div className="manager-container">
                        <ProfileUtils />

                        <h3> Venues you manage:</h3>

                        <div className="container">
                            <VenuesManaged />
                        </div>

                        <button onClick={handleLogout}> log out  </button>
                    </div>


                </>}


            <Footer />
        </>

    )
}
