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



useEffect(() => {
  axios
    .get(VENUES_URL)
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
