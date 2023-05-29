import React, { useEffect, useState} from 'react'
import { Card } from '../../components/card/Card';
import axios from "../../api/axios"
import './populardestinations.css'

export const PopularDestinations = () => {



    
  const VENUES_URL = "/api/v1/holidaze/profiles/MyRoomie/venues"
  const [data, setData] = useState([])
  const [japan,setJapan] = useState([])
  const [beach,setBeach] = useState()
  const [nature,setNature] = useState()
  
  const config = {  headers: {
    Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2NSwibmFtZSI6Ik15Um9vbWllIiwiZW1haWwiOiJteXJvb21pZUBub3JvZmYubm8iLCJhdmF0YXIiOiJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC85NTMwNjk3NzQvcGhvdG8vY29yZ2ktZG9nLXNtaWxlLWFuZC1oYXBweS1pbi1zdW1tZXItc3VubnktZGF5LmpwZz9zPTE3MDY2N2Emdz0wJms9MjAmYz1yRE5DS1hsTmlrZjRfQmYzWkszbUlQV2pWVi1jRDlYUzJXTmJiRWhVMzM0PSIsInZlbnVlTWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjg1MzcxNjM4fQ.sYj8JLS4hIsEoyA8Q_hlPwDHIcO0UIC7sxNYb7MQ0FE`
    }}


useEffect(() => {
  axios
    .get((VENUES_URL), config
     )
    .then((result) => {
      console.log(result.data);

      setData(result.data);

      setJapan(result.data.filter((data) =>{
            return data.location.country == "Japan"
          }));

          setBeach(result.data.filter((data) =>{
            return data.location.country == "Spain" || data.location.country == "Indonesia" || data.location.country == "Philippines"
          }));  
          setNature(result.data.filter((data) =>{
            return data.location.country == "Iceland" || data.location.country == "Poland" || data.location.country == "Peru"
          }));  
          
    })
    .catch((error) => console.log(error));
}, []);



  return (
    <div> 
   

<h2> Popular destinations</h2>
    <div className="cards"> 
   {beach?.map ((data) => {
    return <Card
    key={data.id}
     id={data.id} 
     name={data.name}
     country={data.location.country}
     price = {data.price}
     wifi={data.meta.wifi}
     parking={data.meta.parking}
     breakfast={data.meta.breakfast}
     pets={data.meta.pets}
     description={data.description.length > 250 ? `${data.description.substring(0, 250)}...` : data.description }
    image ={data.media[0]}
    
    />
   })}
</div>
<h2> Japan trip destinations</h2>
<div className="cards"> 
   {japan?.map ((data) => {
    return <Card
    key={data.id}
     id={data.id} 
     name={data.name}
     country={data.location.country}
     price = {data.price}
     wifi={data.meta.wifi}
     parking={data.meta.parking}
     breakfast={data.meta.breakfast}
     pets={data.meta.pets}
     description={data.description.length > 250 ? `${data.description.substring(0, 250)}...` : data.description }
    image ={data.media[0]}
    
    />
   })}
</div>
<h2> Relaxing nature destinations</h2>
<div className="cards"> 
   {nature?.map ((data) => {
    return <Card
    key={data.id}
     id={data.id} 
     name={data.name}
     country={data.location.country}
     price = {data.price}
     wifi={data.meta.wifi}
     parking={data.meta.parking}
     breakfast={data.meta.breakfast}
     pets={data.meta.pets}
     description={data.description.length > 250 ? `${data.description.substring(0, 250)}...` : data.description }
    image ={data.media[0]}
    
    />
   })}
</div>
</div>
  )
}
