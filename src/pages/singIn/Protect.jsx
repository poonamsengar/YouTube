import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import "./style.css"

const Protect = () => {
    const token = localStorage.getItem('loggedin')
  return token ? <Outlet/> : <Navigate to = {"/"} />
}

export default Protect