import React from 'react'


function Keypad (){
    // function handleTextChange(event){
    //     console.log(event.target.value)
    // }

    return (
        <div>
            <input type ="password" onChange = {()=> console.log("Entering password...")}/>
        </div>
    )
}

export default Keypad;