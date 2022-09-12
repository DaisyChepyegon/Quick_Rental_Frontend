import React,{useEffect, useState} from 'react'
import {FaPhone} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import "./home.css"
import image from './home.jpg'

function Home({reviews}) {
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
        <div className='contain'>

          <p> {house.location} </p>
          <p> {house.price} </p>
          <p> {house.bedrooms} </p>
          <p> {house.description} </p>
          <hr />
        </div>
      </div>
    ))
    
  )

  let reviewcontainer = (
    reviews.map((review) => (
      <>
        <div className='contain'>
          <h4>{review.name}</h4>
          <p>{review.comment}</p>
          <hr />
        </div>
      </>
    ))
  )


  return (
    <div className='home'>

    <div className='container'>
    <div className='words'>
    <h1><span></span>Rent<span/> Your Home With Us</h1>
     <p>Providing our clients with
excellent service via strategic
and timely execution,This enables the users to find their ideal houses at the price range they can afford.
<br />

<h3> Contact us for more infomation:</h3>
<br />
<FaPhone />  <h4>0712345678</h4>

<FaFacebook />   <h4>@Quick_Rentals</h4>

<FaInstagram />   <h4>@Quick_Rentals</h4>

</p>
    </div>

    <div className='image'>
      <img src={image} alt='home' height={550} width={500} />
    </div>
    </div>

    <div>
    {/* <Search placeholder="search by location" data = {houses}/> */}
    </div>
    
    <div className='dis'>
    <div className='left'>
      {container}
    </div>
    <div className='right'>
    {reviewcontainer}
    </div>
    </div>
    

    </div>
  )
}

export default Home
