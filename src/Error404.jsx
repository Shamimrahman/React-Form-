import React from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'

function Error404() {
  

    return (
        <div>
        <h1>Error 404 </h1>
        <NavLink to='/'>Go Back</NavLink>
            
        </div>
    )
}

export default Error404
