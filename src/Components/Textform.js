import React,{useState} from 'react'

export default function Textform(props) {
  
  const handleUpClick = ()=>{
  //console.log("Uppercase Was Clicked");
  let newText = text.toUpperCase();
  setText(newText)
}
const handleloClick = ()=>{
  //console.log("Lowercase Was Clicked");
  let newText = text.toLowerCase();
  setText(newText)
}
const handleclearClick = ()=>{
  //console.log("Lowercase Was Clicked");
  let newText = '';
  setText(newText)
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

const handelOnChanged = (event)=>{
  //console.log("Uppercase Was Changed");
  setText(event.target.value);
}
  const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
        <textarea className="form-control" value={text} onChange={handelOnChanged}id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert To Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleloClick} >Convert To Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleclearClick} >Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={speak}>Speak</button>
        
    </div>
    
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words And {text.length} Charcters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
          
    </div>
    
    </>
  )
}
