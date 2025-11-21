import { useState } from "react"

const Register = () => {
  const [newUser, setNewUser] = useState({ email: "", password: ""});

  const register = async (e) => {
    try {
      const response = await fetch("http://localhost:3000/api/account/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
      })

      const data = await response.json();
      if (data.success) {
        setNewUser({ email: "", password: "" });
        alert("User created successfully!");
      } else {
        alert("Error: " + data.message);
      }
      
    } catch (error) {
      alert("Error creating user: " + error.message);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={register}>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} required/>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" id="password" value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} required/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register