import React,{useEffect,useState} from 'react'
import axios from 'axios'
import HouseContainer from './HouseContainer'
import HouseForms from './HouseForms'
import './house.css'
import Search from '../Search/Search'


function Houses() {
  const [houses, setHouses] = useState([])

  const getHouse = () => {
    axios.get("https://quickrentals.herokuapp.com/houses")
    .then((resp => {
      setHouses(resp.data)
      console.log(resp.data)
    }))
  }

  const addHouse = (newdata) => {
    axios.post("https://quickrentals.herokuapp.com/houses", newdata)
    setHouses(
      [...houses, newdata]
    )
  }

  // const addHouse = (newdata) => {
  //   setHouses(
  //     [...houses, newdata]
  //   )
  // }

  const updateHouse = async (id,objdata) => {
    return await axios.patch(`${"https://quickrentals.herokuapp.com/houses"}/${id}`,objdata)
  }

  const updatedom = (id) => {
    let update = houses.filter((house) => 
    house.id !== id)
    setHouses(update)
  }

  const deleteHouse = (id) =>{
    updatedom(id)
    axios.delete(`${"https://quickrentals.herokuapp.com/houses"}/${id}`)
  }

  useEffect(() => {
    getHouse()
  },[])

  return (
    <div className='cont'>
      <div>
        <HouseForms addHouse={addHouse} />

        <Search placeholder="search by location..." data={houses}/>

        <HouseContainer
          houses={houses}
          deleteHouse={deleteHouse}
          updateHouse={updateHouse}
        />
      </div>
    </div>
  )
  
}

export default Houses
