import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protect = () => {
    const token = localStorage.getItem('loggedin')
  return token? <Outlet/> : <Navigate to = {"/Login"} />
}

export default Protect