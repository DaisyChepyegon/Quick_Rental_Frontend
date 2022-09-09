import React from 'react'
import {Navigate} from "react-router-dom"
import "./home.css"
import Search from '../Search/Search'
import image from './home.jpg'

function Home({location}) {
  // if (!loggedIn)
  //   return <Navigate to="/Login"/>

  return (
    <div className='home'>

    <div className='container'>
    <div className='words'>
    <h1><span></span>Rent<span/> Your Home With Us</h1>
     <p>The public static directory is mapped to the / endpoint, and visiting this endpoint from a browser will download the index.html webpage. This webpage in turn loads the React components. And because React Browser Router is a React component, the routes are loaded dynamically after visiting the / endpoint.</p>
    </div>

    <div className='image'>
      <img src={image} alt='home' height={500} width={500} />
    </div>
    </div>
    <div>
    <Search />

    <div>
      <ul>
        <li>{location}</li>
      </ul>
    </div>
    </div>

    </div>
  )
}

export default Home
