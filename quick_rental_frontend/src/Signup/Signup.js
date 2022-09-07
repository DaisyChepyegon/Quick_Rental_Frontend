import React from 'react'

function Signup() {
  

  return (
    <div>
      
      <div className="signup">
      <div className="imgs">
      <img src={home} alt="image0" height={550} width={500}/>
      </div>
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
