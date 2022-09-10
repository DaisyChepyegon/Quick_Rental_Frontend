import React from 'react'
import HouseDisplay from './HouseDisplay'

function HouseContainer({houses, updateHouse, deleteHouse}) {
  console.log(houses)

  return (
    <div className='cont'>
      {houses.map((item) =>
        <HouseDisplay
        key = {item.id}
        id = {item.id}
        location={item.location}
        bedrooms={item.bedrooms}
        price={item.price}
        description={item.description}
        updateHouse={updateHouse}
        deleteHouse={deleteHouse}
        />
      )}
    </div>
  )
}

export default HouseContainer
