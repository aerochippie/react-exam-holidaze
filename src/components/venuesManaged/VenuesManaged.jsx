import React, { useEffect, useState} from 'react'
import axios from "../../api/axios"
import { Card } from '../card/Card'
import { DeletePop } from '../popUps/DeletePop'
import { EditPop } from '../popUps/EditPop'

export const VenuesManaged = () => {
  
    const username = localStorage.getItem("name")
    const PROFILE_VENUES_URL = `/api/v1/holidaze/profiles/${username}/venues`
    const [popUp, setPopUp] = useState("hidden")
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get(PROFILE_VENUES_URL)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
            console.log(data)
    }, [])





    const handleDeletePop = () => {
        popUp === "hidden" ? setPopUp("show-profile-update") : setPopUp("hidden")
    }

    const [isOpen, setisOpen] = useState(false)
    
    const [isOpen2, setisOpen2] = useState(false)
    const [venueId, setVenueId] = useState(false)
    const togglePopUp = (e) => {
        setVenueId (e.target.parentNode.getAttribute("venueid"))
        setisOpen(!isOpen)
    }
    const togglePopUp2 = (e) => {
        setVenueId (e.target.parentNode.getAttribute("venueid"))
        setisOpen2(!isOpen2)
    }

   
  return (
 <>
            {data.map((data) => {
                

                return (
                <div className="container">  
                <Card key={data.id}
                id={data.id}
                name={data.name}
                country={data.location.country}
                price={data.price}
                wifi={data.meta.wifi}
                parking={data.meta.parking}
                breakfast={data.meta.breakfast}
                pets={data.meta.pets}
                description={data.description.length > 250 ? `${data.description.substring(0, 250)}...` : data.description}
                image={data.media[0]}
                />
                
                    <div className="buttons-group">

                        <div className="group-1" venueid={data.id}>
                            <button onClick={togglePopUp2}> edit </button>
                            <button onClick={togglePopUp}> delete</button>
              
                {  
                isOpen && <DeletePop
              handleClose={togglePopUp}
              venueid={venueId}
              />}
                 {  
              isOpen2 &&<EditPop
              handleClose={togglePopUp2}
              venueid={venueId}
              venuedata={{data}}
              />}
                        </div>

                        <div className="group-2">
                            <button> view bookings</button>
                        </div>
                    </div>

                </div>
                )

            })}


             </>
                            
  )
}
