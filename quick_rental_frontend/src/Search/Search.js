import React,{useState} from 'react'
import {FaSearchengin} from "react-icons/fa";
import './search.css'

function Search({placeholder, data}) {
  const[filterHouses, SetFilterHouses] = useState([])

  return (
    <div className='search'>
      <div className='inputs'>
        <input type="text" placeholder={placeholder} onChange={}/>
        <div className='icon'>
          <FaSearchengin />
        </div>
      </div>
      { filterHouses.length !=0 && (
      <div className='results'>
        {data.map((value, key) =>{
          return (
            <a className='dataitem' href={value.link} target="_parent">
          <p>{value.location}</p>
          </a>
          )
        })}
      </div>
      )}
    </div>
  )
}

export default Search
