import React, { useEffect, useState} from 'react'
import axios from "../../api/axios"
import { Navbar } from '../../components/navbar/Navbar';
import { Header } from '../../components/header/Header';
import { MdOutlineAdd } from "react-icons/md"
import { Card } from '../../components/card/Card';

import { Profile } from '../../components/profile/Profile';
import { ProfileUtils } from '../../components/profileUtils/ProfileUtils';
import { VenuesManaged } from '../../components/venuesManaged/VenuesManaged';
import { Footer } from '../../components/footer/Footer';

export const Dashboard = () => {


  
    const isManager = localStorage.getItem("isManager");
    console.log(isManager)
    return (

        <>
            <Navbar />
            <Header />
            <Profile/>




            {isManager &&
                <>

                    <div className="manager-container">
                        <ProfileUtils/>
                        
                        <h3> Venues you manage:</h3>

                        <div className="container">
                            <VenuesManaged/>
                        </div>
                    
                        <button> log out  </button>
                    </div>

                
                </>



            }

            {!isManager &&
                <div className=""> IS NOT MANAGER </div>









            }
<Footer/>
        </>

    )
}
