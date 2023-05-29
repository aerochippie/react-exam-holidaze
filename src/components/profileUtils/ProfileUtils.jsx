import React, { useEffect, useState } from 'react'
import axios from "../../api/axios"
import { AiOutlineWifi } from 'react-icons/ai';
import { MdPets } from 'react-icons/md';
import { FaParking } from 'react-icons/fa';
import { MdOutlineFastfood } from 'react-icons/md';
import { MdOutlineAdd } from "react-icons/md"

export const ProfileUtils = () => {


    const ADDVENUE_URL = `/api/v1/holidaze/venues`
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [maxGuests, setMaxGuests] = useState(0);
    const [wifi, setWifi] = useState(false);
    const [parking, setParking] = useState(false);
    const [breakfast, setBreakfast] = useState(false);
    const [pets, setPets] = useState(false);
    const [address, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [continent, setContinent] = useState('');
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [media, setMedia] = useState('');
    const [popUp, setPopUp] = useState("hidden")

    const newVenue = {
        name: name,
        description: description,
        price: price,
        maxGuests: maxGuests,
        media:
            media
        ,
        rating: rating,
        meta: {
            wifi: wifi,
            parking: parking,
            breakfast: breakfast,
            pets: pets
        },
        location: {
            address: address,
            city: city,
            zip: zip,
            country: country,
            continent: continent,
            lat: lat,
            lng: lng,
        }
    }
console.log(newVenue)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("form submited")
        try {
            const response = await axios.post(ADDVENUE_URL, newVenue
            );
            console.log(response);
            response.status === 201  && window.location.reload(true);

        }
        catch (err) {
            console.log(err.response)
        }
    }


    function toggle(value) {
        return !value;
    }
    const handleOnClick = () => {
        popUp === "hidden" ? setPopUp("show-profile-update") : setPopUp("hidden")}
    return (
        <>

            <div className="">
                <button onClick={handleOnClick}> <MdOutlineAdd /> Add a new veuenue </button>
            </div>


            <div className={popUp}>
                <div className="add-venue-form-container">
                    <div className="left">
                        <div className="field">
                            <label htmlFor="name"> Venue Name
                                <input type="text" placeholder='Venue Name' id="name" onChange={(e) => { setName(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="description"> Description
                                <textarea type="" placeholder='Description' id="description" onChange={(e) => { setDescription(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field double-field">
                            <label htmlFor="price"> Price
                                <input type="number" placeholder='Price' id="price" onChange={(e) => { setPrice(e.target.valueAsNumber) }} />



                            </label>
                            <div className="meta-checkbox">
                                <div className="checkbox">
                                    <label htmlFor="wifi">   <AiOutlineWifi />
                                        <input type="checkbox" id="wifi" checked={wifi} onChange={() => setWifi(toggle)} /> </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="pets">   <MdPets />
                                        <input type="checkbox" id="pets" checked={pets} onChange={() => setPets(toggle)} /> </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="parking">   <FaParking />
                                        <input type="checkbox" id="parking" checked={parking} onChange={() => setParking(toggle)} /> </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="breakfast">   <MdOutlineFastfood />
                                        <input type="checkbox" id="breakfast" checked={breakfast} onChange={() => setBreakfast(toggle)} /> </label>
                                </div>

                            </div>
                        </div>
                        <div className="field double-field">
                            <label htmlFor="maxGuests"> Max Guests : {maxGuests}
                                <input type="range" min="0" max="100"  value={maxGuests} placeholder='Max Guests' id="maxGuests" onChange={(e) => { setMaxGuests(e.target.valueAsNumber) }} />
                            </label>
                            <label htmlFor="rating"> Rating : {rating}
                                <input type="range" min="0" max="5"  value={rating} placeholder='Rating' id="rating" onChange={(e) => { setRating(e.target.valueAsNumber) }} />
                            </label>
                        </div>

                        <div className="field">
                            <label htmlFor="images"> Images (Urls)
                                <textarea type="" placeholder='image(s) url' id="images" onChange={(e) => { setMedia(e.target.value) }} />
                            </label>
                        </div>

                    </div>

                    <div className="right">
                        <div className="field">
                            <label htmlFor="streetAdress"> Street Adress
                                <input type="text" placeholder='Street Adress' id="streetAdress" onChange={(e) => { setAdress(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="city"> City
                                <input type="text" placeholder='City' id="city" onChange={(e) => { setCity(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="zipCode"> Zip Code
                                <input type="text" placeholder='Zip Code' id="zipCode" onChange={(e) => { setZip(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="country"> Country
                                <input type="text" placeholder='Country' id="country" onChange={(e) => { setCountry(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="continent"> Continent
                                <input type="text" placeholder='Continent' id="continent" onChange={(e) => { setContinent(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field double-field">
                            <label htmlFor="lat"> Latitude
                                <input type="number" placeholder='Latitude' id="lat" onChange={(e) => { setLat(e.target.valueAsNumber) }} />
                            </label>
                            <label htmlFor="lng"> Longitude
                                <input type="number" placeholder='Longitude' id="lng" onChange={(e) => { setLng(e.target.valueAsNumber) }} />
                            </label>
                        </div>
                    </div>
                </div>
                <button type='submit' onClick={handleSubmit}> add </button>
                <button onClick={handleOnClick}> cancel </button>
            </div>
        </>

    )
}
