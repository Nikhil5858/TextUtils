import React, { useState } from 'react'

export default function About() {

  const [mystyle , setmystyle] =  useState
    ({
      color: 'black',
      backgroundColor: 'white'
    })  
    const [btntext,setbtntext] = useState("Enable Dark Mode")

   const toggleStyle = () =>{
    if(mystyle.color == 'black'){
      setmystyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setbtntext("Enable Light Mode")
    }
    else{
  setmystyle({
    color: 'black',
    backgroundColor: 'white'
  })    
  setbtntext("Enable Light Mode");
    }
  }
    
  return (
    <div>
      <div className="container" style={mystyle}>

      <button onClick={toggleStyle} className="btn btn-primary" type="button" >{btntext}</button>
      
      </div>
    </div>
  );
}
