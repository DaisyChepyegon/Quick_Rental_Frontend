import React,{useEffect,useState} from 'react'
import axios from 'axios'
import HouseContainer from './HouseContainer'
import HouseForms from './HouseForms'
import './house.css'


function Houses() {
  const [houses, setHouses] = useState([])

  const getHouse = () => {
    axios.get("http://localhost:9292/houses")
    .then((resp => {
      setHouses(resp.data)
      //console.log(resp.data)
    }))
  }

  const addData = (newdata) => {
    axios.post("http://localhost:9292/houses", newdata)
  }

  const addHouse = (newData) => {
    setHouses(
      [...houses, newData]
    )
  }

  

  return (
    <div>
      
    </div>
  )
  
}

export default Houses
