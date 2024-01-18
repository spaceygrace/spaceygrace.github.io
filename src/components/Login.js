import React, { useState } from "react"

export default function Login({ setToken }) {
  const [password, setPassword] = useState()

  const handleSubmit = async e => {
    e.preventDefault()
    if (password == "D&Lforever") {
      setToken(1)
    } else {
      document.getElementById("password").value = ""
      document.getElementById("message").innerHTML = "Incorrect password"
    }
  }

  return (
    <div class="wrapper">
      <div class="background hands" />
      <div class="container">
        <div class="box flexcol">
          <h1>Please log in.</h1>
          <form id="password-form" class="flexrow" onSubmit={handleSubmit}>
            <input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button type="submit" id="password-button">
              <span class="fa-solid fa-circle-arrow-right"/>
            </button>
          </form>
          <br />
          <p id="message" />
        </div>
      </div>
    </div>
  )
}
