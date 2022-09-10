import React from 'react'

function HouseDisplay({location, bedrooms, price, description, id, updateHouse, deleteHouse}) {

  return (
    <div className='flex'>
      <div className='house'>
        <p>{location}</p>
        <p>{bedrooms}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>

      <button className='delete' onClick={() => {deleteHouse(id)}}>Delete</button>
    </div>
  )
}

export default HouseDisplay
{location, bedrooms, price, discription}