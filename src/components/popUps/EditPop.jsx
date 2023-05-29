import React, { useEffect, useState } from 'react'
import { ProfileUtils } from '../profileUtils/ProfileUtils';
import axios from "../../api/axios"
import { AiFillFacebook, AiOutlineWifi } from 'react-icons/ai';
import { MdPets } from 'react-icons/md';
import { FaParking } from 'react-icons/fa';
import { MdOutlineFastfood } from 'react-icons/md';
import { MdOutlineAdd } from "react-icons/md"

export const EditPop =  (props) => {

    
    const { venueid, handleClose, venuedata} = props;
    const oldVenue = venuedata.data

    const EDITVENUE_URL = `/api/v1/holidaze/venues/${venueid}`
    const [name, setName] = useState(oldVenue.name);
    const [description, setDescription] = useState(oldVenue.description);
    const [price, setPrice] = useState(oldVenue.price);
    const [rating, setRating] = useState(oldVenue.rating);
    const [maxGuests, setMaxGuests] = useState(oldVenue.maxGuests);
    const [wifi, setWifi] = useState(oldVenue.meta.wifi);
    const [parking, setParking] = useState(oldVenue.meta.parking);
    const [breakfast, setBreakfast] = useState(oldVenue.meta.breakfast);
    const [pets, setPets] = useState(oldVenue.meta.pets);
    const [address, setAdress] = useState(oldVenue.location.address);
    const [city, setCity] = useState(oldVenue.location.city);
    const [zip, setZip] = useState(oldVenue.location.zip);
    const [country, setCountry] = useState(oldVenue.location.country);
    const [continent, setContinent] = useState(oldVenue.location.continent);
    const [lat, setLat] = useState(oldVenue.location.lat);
    const [lng, setLng] = useState(oldVenue.location.lng);
    const [media, setMedia] = useState(oldVenue.media[0]);
    const [popUp, setPopUp] = useState("hidden")

    const newVenue = {
        name: name,
        description: description,
        price: price,
        maxGuests: maxGuests,
        media:[
            media]
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
    const handleEdit = async () => {

 

        try {
            const response = await axios.put(EDITVENUE_URL, newVenue);
            console.log(response);
            response.status === 200  && window.location.reload(true);
  

        }
        catch (err) {
            console.log(err.response)
        }


      }

      function toggle(value) {
        return !value;
    }

    return (
        <div>
            <div>
                <div className="add-venue-form-container">
                    <div className="left">
                        <div className="field">
                            <label htmlFor="name"> Venue Name
                                <input type="text" defaultValue={oldVenue.name} id="name" onChange={(e) => { setName(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="description"> Description
                                <textarea type="text" defaultValue={oldVenue.description} id="description" onChange={(e) => { setDescription(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field double-field">
                            <label htmlFor="price"> Price
                                <input type="number" defaultValue={oldVenue.price} id="price" onChange={(e) => { setPrice(e.target.valueAsNumber) }} />



                            </label>
                            <div className="meta-checkbox">
                                <div className="checkbox">
                                    <label htmlFor="wifi">   <AiOutlineWifi />
                                        <input type="checkbox" id="wifi" defaultChecked={oldVenue.meta.wifi} onChange={() => setWifi(toggle)} /> </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="pets">   <MdPets />
                                        <input type="checkbox" id="pets" defaultChecked={oldVenue.meta.pets}  onChange={() => setPets(toggle)} /> </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="parking">   <FaParking />
                                        <input type="checkbox" id="parking" defaultChecked={oldVenue.meta.parking} onChange={() => setParking(toggle)} /> </label>
                                </div>
                                <div className="checkbox">
                                    <label htmlFor="breakfast">   <MdOutlineFastfood />
                                        <input type="checkbox" id="breakfast" defaultChecked={oldVenue.meta.breakfast} onChange={() => setBreakfast(toggle)} /> </label>
                                </div>

                            </div>
                        </div>
                        <div className="field double-field">
                            <label htmlFor="maxGuests"> Max Guests : {oldVenue.maxGuests}{`>`} {maxGuests}
                                <input type="range" min="0" max="100" defaultValue={oldVenue.maxGuests} id="maxGuests" onChange={(e) => { setMaxGuests(e.target.valueAsNumber) }} />
                            </label>
                            <label htmlFor="rating"> Rating : {oldVenue.rating}{`>`} {rating}
                                <input type="range" min="0" max="5" defaultValue={oldVenue.rating}  id="rating" onChange={(e) => { setRating(e.target.valueAsNumber) }} />
                            </label>
                        </div>

                        <div className="field">
                            <label htmlFor="images"> Images (Urls)
                                <input type="text" defaultValue={oldVenue.media} id="images" onChange={(e) => { setMedia(e.target.value) }} />
                            </label>
                        </div>

                    </div>

                    <div className="right">
                        <div className="field">
                            <label htmlFor="streetAdress"> Street Adress
                                <input type="text" defaultValue={oldVenue.location.address} id="streetAdress" onChange={(e) => { setAdress(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="city"> City
                                <input type="text" defaultValue={oldVenue.location.city} id="city" onChange={(e) => { setCity(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="zipCode"> Zip Code
                                <input type="text" defaultValue={oldVenue.location.zip} id="zipCode" onChange={(e) => { setZip(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="country"> Country
                                <input type="text" defaultValue={oldVenue.location.country} id="country" onChange={(e) => { setCountry(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field">
                            <label htmlFor="continent"> Continent
                                <input type="text" defaultValue={oldVenue.location.continent} id="continent" onChange={(e) => { setContinent(e.target.value) }} />
                            </label>
                        </div>
                        <div className="field double-field">
                            <label htmlFor="lat"> Latitude
                                <input type="number" defaultValue={oldVenue.location.lat} id="lat" onChange={(e) => { setLat(e.target.valueAsNumber) }} />
                            </label>
                            <label htmlFor="lng"> Longitude
                                <input type="number" defaultValue={oldVenue.location.lng} id="lng" onChange={(e) => { setLng(e.target.valueAsNumber) }} />
                            </label>
                        </div>
                    </div>
                </div>
                <button type='submit' onClick={handleEdit}> Save Changes </button>
                <button  > Cancel </button>
            </div>

        </div>
    )
}
