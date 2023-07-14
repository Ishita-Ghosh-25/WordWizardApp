import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const [fontFamily, setFontFamily] = useState('');
    
    const handleChangeFontStyle = (selectedFontFamily) => {
        const textArea = document.getElementById('myBox');
        if (textArea) {
            if (fontFamily) {
              textArea.style.fontFamily = selectedFontFamily;
            }
        }
        setFontFamily(selectedFontFamily);
        props.showAlert("Font Changed!","success");
      };

      const handleCmlClick = () => {
        let newText = "";
        let textArr = text.split(' ');
        {textArr.map((char) => (
            newText += char.charAt(0).toUpperCase() + char.slice(1) + " "
        ))}
        setText(newText.trim()); 
    }
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

    
    
  return (
    <>

        <div className='container' style={{backgroundColor: props.mode==='light'?'white':'#2a3240', color: props.mode==='dark'?'white':'black'}}>
        <h2 className='mx-3'>{props.heading}</h2>
        
        <div className="mb-3 container mh-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#2a3240':'white', color: props.mode==='dark'?'white':'black'}}></textarea>    
        </div>
        <div className='container'>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary" onClick={handleLowerClick}>Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCmlClick}>Camel Case </button>
        <button className="btn btn-primary " onClick={handleExtraSpaces}>Clear Extra Spaces </button>
        <button className=" dropdown my-2 mx-2 btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Fonts
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li> <a
                className="dropdown-item"
                href="#"
                onClick={() => handleChangeFontStyle('Arial')}
              >Arial</a></li>
            <li><a
                className="dropdown-item"
                href="#"
                onClick={() => handleChangeFontStyle('Helvetica')}
              >Helvetica</a></li>
            <li><a
                className="dropdown-item"
                href="#"
                onClick={() => handleChangeFontStyle('Calibri')}
              >Calibri</a></li>
            <li><a
                className="dropdown-item"
                href="#"
                onClick={() => handleChangeFontStyle('Verdana')}
              >Verdana</a></li>
            <li><a
                className="dropdown-item"
                href="#"
                onClick={() => handleChangeFontStyle('Georgia')}
              >Georgia</a></li>
            <li><a
                className="dropdown-item"
                href="#"
                onClick={() => handleChangeFontStyle('Comic Sans MS')}
              >Comic Sans MS</a></li>
            <li><a
                className="dropdown-item"
                href="#"
                onClick={() => handleChangeFontStyle('Roboto')}
              >Roboto</a></li>
        </ul>
        <button className="btn btn-danger" onClick={handleClearText}>Clear All</button>
        </div>

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