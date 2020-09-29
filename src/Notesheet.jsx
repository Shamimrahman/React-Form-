import React,{useState} from 'react'
import Note from './Note'

function Notesheet() {

    let [state,us]=useState({
        title:"",
        content:""
    })

    let[list,ulis]=useState([])

    let input_event=(event)=>{

        let{name,value}=event.target
        us((olditem)=>{
            return{
                ...olditem ,[name]:value
            }
        })
    }

    let save=(event)=>{

        event.preventDefault()


        ulis((olditem)=>{

            return[...olditem,state]

        })

        us({
            title:"",
            content:""
        })


        
    }

    let delete_item=(id)=>{
        ulis((olditem)=>{
            return olditem.filter((a,index)=>{
                return index!=id
            })
        })
    
    }

    return (
        <div>
        <input type='text' placeholder='Title' name='title' value={state.title} onChange={input_event}/>
        <input type='text' placeholder='Content' name='content' value={state.content} onChange={input_event}/>
        <button onClick={save}>Save</button>

        {list.map((value,index)=>{
            return(
                <Note
                title={value.title}
                content={value.content}
                id={index}
                key={index}
                onselect={delete_item}
                
                ></Note>

            )
        })}
        
            
        </div>
    )
}

export default Notesheet
