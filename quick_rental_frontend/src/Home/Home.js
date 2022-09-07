import React from 'react'
import "./home.css"
import image from './home.jpg'

function Home() {
  return (
    <>
    <div className='container'>
    <div className='words'>
    <h1>Rent Your Home With Us</h1>
     <p>The public static directory is mapped to the / endpoint, and visiting this endpoint from a browser will download the index.html webpage. This webpage in turn loads the React components. And because React Browser Router is a React component, the routes are loaded dynamically after visiting the / endpoint.</p>
    </div>

    <div className='image'>
      <img src={image} alt='home' height={500} width={500} />
    </div>
    </div>
    </>
  )
}

export default Home
