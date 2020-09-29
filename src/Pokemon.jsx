import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Pokemon() {

    let [ps,us]=useState()
    let input_event=(event)=>{
        us(event.target.value)
    }

    let[p,up]=useState()
    let[m,um]=useState()

    useEffect(()=>{

        async function getdata(){
            let res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${ps}`)
            up(res.data.name)
            um(res.data.moves.length)

        }

        getdata()

    })



    return (
        <div>
        <h1>Pokemon</h1>

        <h1>I select {ps}</h1>
        <h1>It is {p}</h1>
        <h1>It has {m} moves</h1>

        <select onChange={input_event}>

        <option value='1'>1</option>
        <option value='3'>7</option>
        <option value='25'>25</option>
        <option value='7'>7</option>

        
        
        </select>
            
        </div>
    )
}

export default Pokemon
