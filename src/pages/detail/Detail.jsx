import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "../../api/axios"
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { HiLocationMarker } from 'react-icons/hi';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdPets } from 'react-icons/md';
import { FaParking } from 'react-icons/fa';
import { MdOutlineFastfood } from 'react-icons/md';
import { GiPerson } from 'react-icons/gi';

export const Detail = () => {

    const params = useParams()
    const id = (JSON.parse(JSON.stringify(params.id)))
    const DETAIL_URL = `/api/v1/holidaze/venues/${id}`
    const [data, setData] = useState([])
    const [location, setLocation] = useState([])
    const [meta, setMeta] = useState([])
    useEffect(() => {
        axios
          .get(DETAIL_URL)
          .then((result) => {
            console.log(result.data);
            setData(result.data);
            setLocation(result.data.location);
            setMeta(result.data.meta);
          })
          .catch((error) => console.log(error));
      }, []);
      

     

  return (
    <> 
    <Navbar />
    <Header />
    <div className="detail-container">
        <div className="detail-heading">
            <h1> {data.name}</h1>
            <span> {data.price}</span>
        </div>
        <div className="detail-image">
            <img src={data.media} alt="" />
        </div>
        <div className="detail-aside">
            <div className="location-icon"> <HiLocationMarker/> </div>
            <div className="detail-adress">
                <p> {location.address},{location.city}</p>
                <p> {location.country}</p>
            </div>
            <div className="meta-icons"> 
                        {meta.wifi === true && <AiOutlineWifi />}
                        {meta.pets === true && <MdPets />}
                        {meta.parking === true && <FaParking />}
                        <p>{data.maxGuests}<GiPerson/> </p>
                        </div>
        </div>
        <div className="detail-desc">
            <h2> Welcome to {data.name}</h2>
            <p> {data.description}</p>
            <p> See avaiable dates</p>
        </div>
        <div className="detail-buttons">
            <button> Calendar </button>
            <button> Book now </button>
        </div>
    </div>
    <Footer/>
    </>
    
  )
}
