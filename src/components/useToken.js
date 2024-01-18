import { useState } from "react"

export default function useToken() {

  const getToken = () => {
    // console.log('tokenstring')
    const tokenstring = sessionStorage.getItem('token')
    if (tokenstring !== undefined) {
      // console.log('usertoken')
      const usertoken = JSON.parse(tokenstring)
      return usertoken
    }
  }

  const [token, setToken] = useState(getToken())
  // console.log(token)

  const saveToken = userToken => {
    // console.log(userToken)
    sessionStorage.setItem('token', userToken)
    setToken(userToken)
  }

  return {
    setToken: saveToken,
    token
  }
}
