import React, { useEffect, useState} from 'react'
import axios from "../../api/axios"
import { AiFillEdit } from "react-icons/ai"
import "./profile.css"
export const Profile = () => {

    const username = localStorage.getItem("name")
    const PROFILE_URL = `/api/v1/holidaze/profiles/${username}`
    const AVATAR_URL = `/api/v1/holidaze/profiles/${username}/media`
    const [profileData, setProfileData] = useState([])
    const [popUp, setPopUp] = useState("hidden")
    const [avatar, setAvatar] = useState("")

  
  useEffect (() => {
    axios.get(PROFILE_URL)
    .then(res => setProfileData(res.data))
    .catch(err => console.log(err));
    console.log(profileData)
  },[])


const handleSubmit = async () => {
      const response =  await axios.put(AVATAR_URL, {avatar});
      console.log(response);
      response.status === 200 && window.location.reload(true);
  }

const handleOnClick = () => {
    popUp === "hidden" ? setPopUp("show-profile-update") : setPopUp("hidden")}



    return (
        <div className="profile-container">
            <div className="top-container">
                <h2> Hello {profileData.name} </h2>
                <div className="profile-img">
                    {
                        !profileData.avatar && <img src="https://thedailycorgi.com/wp-content/uploads/2016/06/IMG_20160429_081337.jpg" alt="" />

                    }
                    {
                        profileData.avatar && <img src={profileData.avatar} alt="" />
                    }

                    <div className="edit-icon" onClick={() => { handleOnClick() }}><AiFillEdit /></div>
                    <div className={popUp}>
                        <h5> Update profile picture</h5>
                        <div className="update-field">
                            <label htmlFor="imageurl"> New Picture Url
                                <input type="text" placeholder='Url' id="imageurl" onChange={(e)=>{setAvatar(e.target.value)}}/>

                            </label>
                            <button onClick={() => { handleSubmit() }}> save </button>
                            <button onClick={() => { handleOnClick() }}> cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
