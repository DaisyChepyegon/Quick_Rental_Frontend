import React, {useEffect, useState} from 'react'
import axios from 'axios'
import HouseContainer from './HouseContainer'
import HouseForms from './HouseForms'
import './house.css'
import Search from '../Search/Search'


function Houses() {
  const [houses, setHouses] = useState([])

  // fetch data from backend
  const getHouse = () => {
    axios.get("https://quickrentals.herokuapp.com/houses").then((resp => {
      setHouses(resp.data)
      console.log(resp.data)
    }))
  }


  // post data to backend
  const addHouse = (newdata) => {
    axios.post("https://quickrentals.herokuapp.com/houses", newdata)
    setHouses([
      ...houses,
      newdata
    ])
  }

  // const addHouse = (newdata) => {
  // setHouses(
  //     [...houses, newdata]
  // )
  // }


  // update data in the backend
  const updateHouse = async (id, objdata) => {
    return await axios.patch(`${"https://quickrentals.herokuapp.com/houses"}/${id}`, objdata)
  }

  const updatedom = (id) => {
    let update = houses.filter((house) => house.id !== id)
    setHouses(update)
  }


  // delete data from database
  const deleteHouse = (id) => {
    updatedom(id)
    axios.delete(`${"https://quickrentals.herokuapp.com/houses"}/${id}`)
  }


  // add useEffect hook
  useEffect(() => {
    getHouse()
  }, [])

  return(
    // display content from other compnemts <div className='cont'>
      <div>
        <HouseForms addHouse={addHouse}/>

        <Search placeholder="search by location..."
          data={houses}/>

        <HouseContainer houses={houses}
          deleteHouse={deleteHouse}
          updateHouse={updateHouse}/>
      </div>
  
  )

}

export default Houses
