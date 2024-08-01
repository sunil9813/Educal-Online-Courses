import React, { useState } from 'react'; 
 
function Login() { 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
 
  const handleSubmit = (event) => { 
    event.preventDefault(); 
    // Perform login logic here 
    console.log('Username:', username); 
    console.log('Password:', password); 
    // ... 
  }; 
 
  return ( 
    <div> 
      <h1>Login</h1> 
      <form onSubmit={handleSubmit}> 
        <div> 
          <label htmlFor="username">Username:</label> 
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          /> 
        </div> 
        <div> 
          <label htmlFor="password">Password:</label> 
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          /> 
        </div> 
        <button type="submit">Login</button> 
      </form> 
    </div> 
  ); 
} 
 
export default Login;