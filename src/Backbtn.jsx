import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function Backbtn() {
    let location=useLocation()
    let history=useHistory()

    let back=()=>{

       // history.goBack("")
       history.push('/first')

    

    }
    return (
        <div>
            <p>Back Button come from {location.pathname}</p>

            {location.pathname===`/backbtn`?<button onClick={back}>Go To Home Page</button>:'none'}
        </div>
    )
}

export default Backbtn
