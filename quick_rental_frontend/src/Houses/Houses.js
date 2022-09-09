import React,{useEffect,useState} from 'react'

function Houses() {
  const[houses, setHouses] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/houses")
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
        </div>
      </div>
    ))
  )


  return (
    <div>
      <div>{container}</div>
    </div>
    
  )
  
}

export default Houses
