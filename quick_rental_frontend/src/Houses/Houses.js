import React,{useEffect,useState} from 'react'

function Houses() {
  const[houses, setHouses] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/houses")
    .then((resp) => resp.json())
    .then((houses) => setHouses(houses));
  },[]);
  console.log(houses)
  return (
    <div>
      
    </div>
  )
}

export default Houses
