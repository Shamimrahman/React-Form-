import React,{useState} from 'react'
import './Note.css'

function Note(props) {

    let[cut,ucut]=useState(false)

    let cutit=()=>{
        ucut(true)

    }
    return (
        <div className='main-div'>
        <h1 style={{textDecoration:cut?"line-Through":'none'}}>{props.title}</h1>
        <p style={{textDecoration:cut?"line-Through":'none'}}>{props.content}</p>
        <button onClick={()=>{

            
                props.onselect(props.id)
            

        }}>Delete</button>
      
        <button onClick={cutit}>cutit</button>
            
        </div>
    )
}

export default Note
