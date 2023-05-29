import React, { useEffect, useState} from 'react'
import { Card } from '../../components/card/Card';
import axios from "../../api/axios"
import './populardestinations.css'

export const PopularDestinations = () => {



    
  const VENUES_URL = "/api/v1/holidaze/profiles/MyRoomie/venues"
  const [data, setData] = useState([])
  const [japan,setJapan] = useState([])


useEffect (() => {
  axios.get(VENUES_URL)
  .then(res => setData(res.data))
  .catch(err => console.log(err));
//   let filteredJapan = data.filter((data)=> data.name === "japan")
console.log(data)
setJapan(data.filter((data) =>{
  return data.name == "Japan"
}))

},[])

console.log(japan)


// const japanFilter = wifi =>{
//   setJapan(
//     data.filter( data =>{
//       return data.meta.wifi === true
//     })
//   )
// } 

// const filtered = data.filter(data => {
//   return data.name === 'japan';
// });

// console.log(filtered);
// console.log(data[1].name)

  return (
    <div> 
    {/* <h2> Popular destinations</h2>
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
</div> */}

{data.filter(data => {
  return data.name === 'japan'
})
.map(item => {
  return (
    <>
    <p> {item.name}</p>
    <p> hello </p>
    <p> hello </p>
    <p> hello </p>
    <p> hello </p>
    <p> hello </p>
    <p> hello </p>
    <p> hello </p>
    <p> hello </p>
    <p> hello </p>
    </>
  )
})

}

</div>
  )
}
