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
  return (
   <form>
     <h2>Houses</h2>
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

     <textarea 
      name="descriprion"
      placeholder="Write your description here..." rows={6}
      onChange={handleChange}
      value={formData.description}
     />

     <input className='btn' type="submit" value="send" />

   </form>
  )
}

export default HouseForms
