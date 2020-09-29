import React,{useState} from 'react'
import { useHistory, useLocation} from 'react-router-dom'

import Backbtn from './Backbtn'
import Note from './Note'
import Notesheet from './Notesheet'
import Searchresult from './Searchresult'

function Search() {

    let location=useLocation()
    let btn=useHistory()
    let[ps,us]=useState("")

    let input_event=(event)=>{
        us(event.target.value)

    }
    return (
        <div>
            
        <h1>Search</h1>
        <input type='text' onChange={input_event} value={ps}></input>

        {ps===""?null:<Searchresult

        data={ps}
        
        ></Searchresult>}

      
        </div>
    )
}

export default Search
