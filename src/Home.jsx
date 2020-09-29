import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='main-style'>

        <Link to='/first'>Home Page</Link>

        <Link to='/note'>Notesheet</Link>
        <Link to='/pokemon'>Pokemon</Link>
        <Link to='/params/Shamim/Rocky'>UseParams</Link>
        <Link to='/backbtn'>Backbutton</Link>
        <Link to='/search'>Seacrh</Link>



            
        </div>
    )
}

export default Home
