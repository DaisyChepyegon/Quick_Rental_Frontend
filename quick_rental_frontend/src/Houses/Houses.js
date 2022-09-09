import React,{useEffect,useState} from 'react'
import Home from '../Home/Home';


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
          {/* <p> {house.reviews.name} </p> */}

          <div className='loc'>
          <h2>Locations</h2>
            {houses.map((list) => <Home location={list.location} key={list.id} />)}
          </div>

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
