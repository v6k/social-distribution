import React, { useContext, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import UserContext from '../context/userContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
const API_URL = "https://cmput-404-w22-group-10-backend.herokuapp.com/"


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white'
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
};

function NavBar() {


  let {loggedIn, setLoggedIn} = useContext(UserContext)
  const {token, setToken} = useContext(UserContext)
  //const {id, setId} = useContext(UserContext)
  const id =  'fe231d46-a216-4208-b806-8a064d9e7323'
  const navigate = useNavigate();


  useEffect(() => {
    
  })

  const logout = () => {
    var current = getCurrentUser();
    localStorage.removeItem('user');
    return axios.post(API_URL+'logout/', {}, {
      headers: {
        'Authorization': 'token ' + current.token
      }
    }
    )
    .then((response) => {
      console.log(response.data)
        return response.data
    });
};

  const handleLogout = (e) => {
    // e.preventDefault();
    // setLoggedIn(false)
    // setToken('')
    var current = getCurrentUser();
    console.log(current);
    logout()
    //setId('')
    navigate('/login')
}

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Nav>
            {loggedIn && (<Link style={linkStyle} to='/home'>Home</Link>)}
            {loggedIn && (<Link style={linkStyle} to={`/profile/:${id}`}>Profile</Link>)}
            {loggedIn && (<Link style={linkStyle} onClick={(e) => handleLogout(e)} to='/login'>Logout</Link>)}

            {!loggedIn && (<Link style={linkStyle} to='/login'>Login</Link>)}
            </Nav>
        </Container>
  </Navbar>
  )
}

export default NavBar