import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillGoogleSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import axios from "../../api/axios"

export const Login = () => {

  const LOGIN_URL = "/api/v1/holidaze/auth/login"
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate();
  console.log(email)

const handleSubmit = async (e)=> {
  e.preventDefault()
  try {
    const response = await axios.post(LOGIN_URL,
      JSON.stringify({ email, password}),
      { headers: { "Content-Type": "application/json" } }
    );
    localStorage.setItem('accessToken', response.data.accessToken)
    console.log(localStorage);
    console.log(response.data.accessToken);
    response.status === 200 && navigate("/")

  }

  catch (err) {
    if (!err?.response) {
      setErrorMsg('Server is not responding')
    }

    else if (err.response?.status === 401) {
      setErrorMsg('Invalid Email or password')
    }
   
    else {
      setErrorMsg('Something went wrong...Refresh and try again')
    }
}}



  return (
    <div className="login">
      <div className="login-container">
        <div className="login-panel">
          <div className="login-logo">
            <img src="/img/logo_black_fill.png" alt="" />
          </div>





          <div className="login-inputs">
          <span className={!errorMsg === '' ? "hide" : "show"}> {errorMsg} </span>
            <div className="field">
            <label htmlFor='email'>Email
              <input type="text"
                id="email"
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
                required
   /></label>
            </div>
            
            
            <div className="field">
            <label htmlFor='password'>Password
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
   /></label>
            </div>

          </div>
          <div className="login-button">
            <button disabled={!email || !password ? true : false} onClick={handleSubmit}> login </button>
          </div>
          <div className="login-register">
            <span> Don't have an account? <Link to={"/Register"}> Register here </Link> </span>
          </div>




          <div className="login-links">
            <a href='/'> <AiFillGoogleSquare /></a>
            <a href='/'><AiFillLinkedin /></a>
            <a href='/'> <AiFillFacebook /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
