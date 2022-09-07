import React,{useState} from 'react'
import "./signup.css"

function Signup() {
  const [name, setName] =useState("")
   const [acc, setAcc] =useState({})
   const [email, setEmail] =useState("")
   const [password, setPassword] =useState("")
   const [formData, setFormData] =useState({
    name:"",
    email:"",
    password:""
   })

// save user data to the local storage
 function handleSubmit(e){
  e.preventDefault()
  setFormData( {
    name:name,
    email:email,
    password:password
  })
  setAcc(formData)
  console.log(formData)   
  localStorage.setItem("acc", JSON.stringify(formData));
  alert("Sign Up successfull")

  }

  return (
    <div className='reg'>
      
      <div className="signup">

      <div className="frm">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="sign">
        
        <label> Name</label>
        <input type="text" placeholder="Name" 
          value={name}
          required
          onChange={e => setName ( e.target.value)}
        />
        <label>Email </label>
        <input type="email" placeholder="Email"
          value={email}
          required
          onChange={e => setEmail( e.target.value)}
        />
        <label>Password</label>
        <input type="password" placeholder="Password"
          value={password}
          required
           onChange={e => setPassword( e.target.value)}
         />
        <button >Sign Up</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
