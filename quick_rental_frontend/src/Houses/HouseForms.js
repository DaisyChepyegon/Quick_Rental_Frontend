import React,{useState} from 'react'

function HouseForms({addHouse}) {

  const [formData, setFormData] = useState(
    {
      location:"",
      bedrooms:"",
      price:"",
      description:""
    })

    function handleChange(event){
      const name = event.target.name
      let value = event.target.value

      setFormData({
        ...formData,
        [name]:value,
      })
    }

    const handleSubmit=(e) => {
      e.preventDefault()
      addHouse(formData)
      console.log(formData)
    }

  return (
    <div className='form'>
   <form onSubmit={handleSubmit} className="info">
     <h2>Add New Houses</h2>
     <input
      name='location'
      type="text"
      placeholder='location'
      onChange={handleChange}
      value={formData.location}
      />

     <input
      name='bedrooms'
      type="integer"
      placeholder='bedrooms'
      onChange={handleChange}
      value={formData.bedrooms}
      />

      <input
      name='price'
      type="integer"
      placeholder='price'
      onChange={handleChange}
      value={formData.price}
      />

     <input 
      name='description'
      type="text"
      placeholder='Write your description here'
      onChange={handleChange}
      value={formData.description}
     />

     <input className='btn' type="submit" value="send" />

   </form>
   </div>
  )
}

export default HouseForms
