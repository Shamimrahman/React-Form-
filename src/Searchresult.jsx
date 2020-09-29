import React from 'react'

function Searchresult(props) {

    const pic=`https://source.unsplash.com/400x300/?${props.data}`
    
    return (
        <div>
        <img src={pic} alt="image"></img>
        
            
        </div>
    )
}

export default Searchresult
