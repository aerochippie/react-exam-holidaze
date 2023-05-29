import React, { useEffect, useState} from 'react'
import axios from "../../api/axios"
import { Card } from '../card/Card'


export const ProfileBookings = () => {

    const username = localStorage.getItem("name")
    const BOOKINGS_URL = `api/v1/holidaze/profiles/${username}/bookings?_venue=true`
    const [data, setData] = useState()


    useEffect(() => {
        axios
          .get(BOOKINGS_URL)
          .then((result) => {
            console.log(result.data);
            setData(result.data);

          })
          .catch((error) => console.log(error));
      }, []);



  return (
    <>
              {data?.map((data) => {
                
                return (
                    <div className="container" key={data.index}>  
                    <Card key={data.id}
                    id={data.venue.id}
                    name={data.venue.name}
                    country={data.venue.location.country}
                    price={data.venue.price}
                    wifi={data.venue.meta.wifi}
                    parking={data.venue.meta.parking}
                    breakfast={data.venue.meta.breakfast}
                    pets={data.venue.meta.pets}
                    description={data.venue.description.length > 250 ? `${data.venue.description.substring(0, 250)}...` : data.venue.description}
                    image={data.venue.media[0]}
                    />
                    
                      <div className="div">
                        <span> You have booked a stay :</span>
                        <p> From {data.dateFrom}</p>
                        <p> To {data.dateTo}</p>
                        <p> For {data.guests} people</p>
                        </div> 
    
                    </div>
                    )
    
                })}
    
    
    </>
  )
}
