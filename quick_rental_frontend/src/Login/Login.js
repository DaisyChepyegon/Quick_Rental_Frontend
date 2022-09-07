import React from 'react'

function Login() {

  
  return (
    <div>
      <div className="lgn">

<div className="img">
  <img src={home} alt="display" height={550} width={500}/>
</div>

<div className="login">
<h1>Login</h1>
 <form onSubmit={handleSubmit} className="log">
  <label>Email </label>
  <input type="email" placeholder="Email"
  required
  value={email}
  onChange={e => setEmail( e.target.value)}
  />
  <label>Password</label>
  <input type="password" placeholder="Password"
  required
  value={password}
  onChange={e => setPassword( e.target.value)}
   />

  <button>Login</button>
  </form>
</div>
</div>
    </div>
  )
}

export default Login
