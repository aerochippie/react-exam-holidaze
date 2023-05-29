import React, { useEffect, useState} from 'react'
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const Detail = () => {
    const navigate = useNavigate();
    const params = useParams()
    const id = (JSON.parse(JSON.stringify(params.id)))
    const DETAIL_URL = `/api/v1/holidaze/venues/${id}`
    const BOOK_URL = `/api/v1/holidaze/bookings`
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
      const [dateFrom, setDateFrom] = useState([])
      const [dateTo, setDateTo] = useState([])
      const [guests, setGuests] = useState([])

      const formatDateFrom = dayjs(dateFrom.$d).toJSON()
      const formatDateTo = dayjs(dateTo.$d).toJSON()

     const newBooking = {
        dateFrom : formatDateFrom,
        dateTo: formatDateTo,
        guests: guests,
        venueId: id
      }
      console.log(newBooking)

const handleBook = async () => { 
    try {
        const response = await axios.post(BOOK_URL, newBooking
        );
        console.log(response);
        response.status === 201  && navigate("/Dashboard");

    }
    catch (err) {
        console.log(err.response)
    }
 }

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
            

            <div className="book-now">
                <p> Book this venue</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <p> date from : </p>
           
            <DatePicker  onChange={(newValue) => setDateFrom(newValue)} />

            <p> date to : </p>
           
           <DatePicker   onChange={(newValue) => setDateTo(newValue)}/>
            </LocalizationProvider>

            <label htmlFor="maxGuests"> guests: {guests}
            <input type="range" min="0" max="100"  value={guests} placeholder='guests' id="maxGuests" onChange={(e) => { setGuests(e.target.valueAsNumber) }} />
            </label>
            <button onClick={handleBook}> Book now </button>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    
  )
}
