import React, { useState } from 'react'
import axios from "../../api/axios"



export const DeletePop = (props) => {

  const { venueid, handleClose} = props;
  const DELETE_VENUES_URL = `/api/v1/holidaze/venues/${venueid}`
  const handleDelete = async () => {

 
  const response = await axios.delete(DELETE_VENUES_URL);
  console.log(response)
    response.status === 204 && window.location.reload(true);
}

  return (


    <div className="delete-prompt">


      <h4> Careful! </h4>
      <p> Are you sure you want to <strong> delete</strong> venue :</p>
      <span> Venue Name </span>


      <button className='btn-close' onClick={handleDelete} > Delete </button>
      <button className='btn-close' onClick={handleClose}> cancel </button>


    </div>
  )
}
