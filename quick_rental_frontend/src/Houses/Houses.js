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

  const updateHouse = async (id,objdata) => {
    return await axios.patch(`${"http://localhost:9292/houses"}/${id}`,objdata)
  }

  const updatedom = (id) => {
    let update = houses.filter((house) => 
    house.id !== id)
    setHouses(update)
  }

  const deleteHouse = (id) =>{
    updatedom(id)
    axios.delete(`${"http://localhost:9292/houses"}/${id}`)
  }

  useEffect(() => {
    getHouse()
  },[])

  return (
    <div className='cont'>
      <div>
        <HouseForms addHouse={addHouse} />

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
