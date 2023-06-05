import React,{useState} from "react";

export default function Cal(props) {
  const handleAddClick = ()=>{
    setText( text.num1 + text.num2);
    }
  const handleSubClick = ()=>{
    setText( text.num1 - text.num2);
  }
  const handleMulClick = ()=>{
    setText( text.num1 * text.num2);
  }
  const handleDivClick = ()=>{
    setText( text.num1 / text.num2);
  }
  const handleOnChange = (event)=>{
    setText( event.target.value);
  }
  const [text, setText] = useState({
    num1:"",
    num2:"",
  });
//   const [result, setResult] = useState(0);
  // text = "new text" // wrong way to change state
  // setText("new text"); // Correct way to change state
  return (
    <div style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="">Enter Number 1</label>
        <textarea className="form-control" value={text.num1} onChange={handleOnChange} id="myBox" rows="1" cols="1"></textarea>
        <label htmlFor="">Enter Number 2</label>
        <textarea className="form-control" value={text.num2} onChange={handleOnChange} id="myBox" rows="1" cols="1"></textarea>

        <button className="btn btn-primary" onClick={handleAddClick} style={{marginRight: '.5rem' }} >Addition</button>
        <button className="btn btn-primary" onClick={handleSubClick} style={{marginRight: '.5rem' }} >Subtraction</button>
        <button className="btn btn-primary" onClick={handleMulClick} style={{marginRight: '.5rem' }} >Multiplication</button>
        <button className="btn btn-primary" onClick={handleDivClick} style={{marginRight: '.5rem' }} >Division</button>
        <div>
            <label htmlFor="">Result</label>
            <textarea className="form-control" value={setText} onChange={setText} id="myBox" rows="1" cols="1"></textarea>
        </div>
      </div>

    </div>
  );
}