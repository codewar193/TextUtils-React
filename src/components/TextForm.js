import React ,{useState}from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to uppercase!", "success");
  }

  const handleLoClick = ()=>{
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lowercase!", "success");

  }
  const handleClClick = ()=>{
    let newText= "";
    setText(newText);
    props.showAlert("Texted Cleared!", "success");
  }

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }
  const removeExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");

  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text,setText] = useState('');
 
  return (
    <>
    <div className='container' style={{color: props.mode=== 'dark'?'white':'black'
    }}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" style={{background:props.mode === 'dark'?'grey': 'white',color: props.mode=== 'dark'?'white':'black'
   }} onChange={handleOnChange} value = {text} id="myBox" rows="8"></textarea>  {/*  onChange =listen function */}
    </div>
    <button className="btn btn-primary mr-2" onClick={handleUpClick}>Convert to upperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClClick}>To Clear</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
    </div>

    <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#0e1023'
   }}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  

   
  )
}
