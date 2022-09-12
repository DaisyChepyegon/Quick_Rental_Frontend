import React,{useEffect, useState} from 'react'
import {Navigate} from "react-router-dom"
import "./home.css"
import Search from '../Search/Search'
import image from './home.jpg'

function Home({location}) {
  // if (!loggedIn)
  //   return <Navigate to="/Login"/>

  const[houses, setHouses] = useState([])

  useEffect(() => {
    fetch("https://quickrentals.herokuapp.com/houses")
    .then((resp) => resp.json())
    .then((houses) => setHouses(houses));
  },[]);
  console.log(houses);

  let container = (
    houses.map((house) => (
      <div>
        <div className='cont'>

          <p> {house.location} </p>
          <p> {house.price} </p>
          <p> {house.bedrooms} </p>
          <p> {house.description} </p>
          {/* <p> {house.find(params[:id]).reviews.name} </p> */}

        </div>
      </div>
    ))
  )

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
    {/* <Search placeholder="search by location" data = {houses}/> */}
    </div>

    <div>
      {container}
    </div>

    </div>
  )
}

export default Home
