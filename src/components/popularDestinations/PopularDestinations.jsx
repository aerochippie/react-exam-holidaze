import React, { useEffect, useState} from 'react'
import { Card } from '../../components/card/Card';
import axios from "../../api/axios"
import './populardestinations.css'

export const PopularDestinations = () => {



    
  const VENUES_URL = "/api/v1/holidaze/venues?limit=3"
  const [data, setData] = useState([])


useEffect (() => {
  axios.get(VENUES_URL)
  .then(res => setData(res.data))
  .catch(err => console.log(err));
  console.log(data)
 
},[])


  return (
    <> 
    <h2> Popular destinations</h2>
    <div className="cards"> 
   {data.map ((data) => {
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
</>
  )
}
