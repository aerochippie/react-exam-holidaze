import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillGoogleSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { TiWarning } from 'react-icons/ti';
import { TiTick } from 'react-icons/ti';
import axios from "../../api/axios"
import "./register.css"

export const Register = () => {

  const navigate = useNavigate();
  const [type, setType] = useState(false)
  const handleCustomer = () => {
    setType(false)
  }
  const handleManager = () => {
    setType(true)
  }

  console.log(type)

  const REGISTER_URL = "/api/v1/holidaze/auth/register"
  const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@noroff.no/;

  const nameRef = useRef();
  const emailRef = useRef();
  // const errRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState('')
  // const { succesMsg, setSuccesMsg } = useState(false)

  useEffect(() => {
    nameRef.current.focus()
  }, [])

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    console.log(result, name)
    setValidName(result)
  }, [name])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result, email)
    setValidEmail(result)
  }, [email])

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result, password)
    setValidPassword(result)
  }, [password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submited")

    try {
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({ name, email, password, "venueManager": type }),
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      response.status === 201 && navigate("/Login");

    }

    catch (err) {
      if (!err?.response) {
        setErrorMsg('Server is not responding')
      }
      else if (err.response?.status === 400) {
        setErrorMsg('This user already exists')
      }
      else {
        setErrorMsg('Something went wrong...Refresh and try again')
      }
    }

  }


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
              <label htmlFor='email'> Email
                <span className={validEmail ? "show" : "hide"}>
                  <TiTick />
                </span>
                <span className={validEmail || !email ? "hide" : "show"}>
                  <TiWarning />
                </span> </label>
              <input
                type="text"
                id="email"
                ref={emailRef}
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
                required
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                aria-describedby='emailnote'
              />
              <p id="emailnote" className={emailFocus && email && !validEmail ? "show" : "hide"}>
                heres the note 14:55 </p>
            </div>


            <div className="field">
              <label htmlFor='name'> Name/Username
                <span className={validName ? "show" : "hide"}>
                  <TiTick />
                </span>
                <span className={validName || !name ? "hide" : "show"}>
                  <TiWarning />
                </span>
              </label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                autoComplete='off'
                onChange={(e) => setName(e.target.value)}
                required
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                aria-describedby='uidnote'
              />
              <p id="uidnote" className={nameFocus && name && !validName ? "show" : "hide"}>
                heres the note 14:55 </p>
            </div>



            <div className="field">
              <label htmlFor='password'> Password
                <span className={validPassword ? "show" : "hide"}>
                  <TiTick />
                </span>
                <span className={validPassword || !password ? "hide" : "show"}>
                  <TiWarning />
                </span>
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                aria-describedby='passwordnote'
              />
              <p id="passwordnote" className={passwordFocus && !validPassword ? "show" : "hide"}> heres the note 14:55 </p>
            </div>
            <div>
              <span> I am a :</span>
              <input type="radio" name="radio-group" onChange={handleCustomer} /> Customer
              <input type="radio" name="radio-group" onChange={handleManager} /> Manager
            </div>



          </div>
          <div className="login-button">
            <button disabled={!validName || !validPassword || !validEmail ? true : false} onClick={handleSubmit}> Register </button>
          </div>
          <div className="login-register">
            <span> Don't have an account? <Link to={"/Login"}> Log in here </Link> </span>
          </div>
          <div className="login-links">
            <a href='#'> <AiFillGoogleSquare /></a>
            <a href='#'><AiFillLinkedin /></a>
            <a href='#'> <AiFillFacebook /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
