import React from 'react'
import { View, Button } from 'react-native'
import { useState } from 'react'
// import LoginForm from '../components/LoginForm/LoginForm'
import SignupForm from '../components/Signup/SignupForm'

const Signup = () => {
    const [user, setUser] = useState(null);
  return (
    <>
        <SignupForm setUser={setUser}/>
    </>

  )
}

export default Signup;