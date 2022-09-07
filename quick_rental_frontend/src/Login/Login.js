import React from 'react'

function Login() {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  const navigate = useNavigate();
    //authentinticate users
  const [account, setAccount] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("acc");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  
 
  function handleSubmit(event) {
     event.preventDefault();
     console.log(account.email, email)
    if(( email ===account.email) &&(password === account.password))
    { 
      setLoggedIn(true)
      navigate("/")

      alert("Loggin SuccessFull")
      return
    }else{
      alert("wrong email or password")
    }
 
  }
  
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
