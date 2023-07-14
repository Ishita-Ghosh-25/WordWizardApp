import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
       let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase","success");
    }
    const handleLowerClick = () =>{
        let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted To Lowercase","success");
     }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleClearText = () => {
        let newText = ' ';
        setText(newText)
        props.showAlert("Text Area Cleared","success");
    }

    const getCharacterCount = () => {
        // Remove spaces from the text
        const textWithoutSpaces = text.replace(/\s/g, '');
    
        return textWithoutSpaces.length;
      };

    const getWordCount = () => {
        const words = text.trim().split(/\s+/); // Split the text by spaces
    
        // Filter out empty strings
        const filteredWords = words.filter((word) => word !== '');
    
        return filteredWords.length;
      };

      const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
        props.showAlert("Removed Extra Spaces","success");
    }

    const [text, setText] = useState('');
    
  return (
    <>
        <div className='container' style={{backgroundColor: props.mode==='light'?'white':'#2a3240', color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        
        <div className="mb-3 container mh-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#2a3240':'white', color: props.mode==='dark'?'white':'black'}}></textarea>    
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary" onClick={handleLowerClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Textarea</button>
        <button className="btn btn-primary " onClick={handleExtraSpaces}>Clear Extra Spaces</button>

        </div>
        <div className="container my-3" style={{backgroundColor: props.mode==='light'?'white':'#2a3240', color: props.mode==='dark'?'white':'black'}}>
            <h4>Your Text Summary</h4>
            <p>{getWordCount()} words and {getCharacterCount()} characters</p>
            <p>{0.008 * getWordCount()} Minuttes Read</p>
            <h4> Preview</h4>
            <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>

        </div>
        </>
  )
}