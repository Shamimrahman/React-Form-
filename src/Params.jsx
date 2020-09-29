import React from 'react'
import { useParams } from 'react-router-dom'



function Params() {

    let {fname,lname}=useParams()
    return (
        <div>
            <h1>React Router UseParams hook</h1>
            <h1>My NAme is {fname} {lname}</h1>
        </div>
    )
}

export default Params
