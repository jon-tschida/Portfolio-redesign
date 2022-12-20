import React from "react";
import { commands } from "./commands.js";


// function for checking to see if a string is present in the commands list
const commandChecker = (arr, str) =>{
  for (let i = 0; i < arr.length; i++){
    if (arr[i].command === str) return true;
    else continue;
  }
  return false;
}

function App() {
  
const bottomRef = React.useRef(null)
  
const [test] = React.useState(["|", "/" , "-", "\\", "|", "/", "-", "\\"])
const [count, setCount ] = React.useState(0)
const [userBrowser, setUserBrowser] = React.useState(``)
const [input, setInput] = React.useState("")
const [output, setOutput] = React.useState("")

const handleSubmit = (e) =>{
  e.preventDefault();

  // try to scroll to bottom of page on submit, DOESNT WORK RIGHT NOW
  bottomRef.current?.scrollIntoView();
  
  // First we check to see if the command is in the list via commandChecker.
  // If the command is present, then we loop through the list and look for the matching command. 
  // Once we find the matching command, we set our output to the command payload, including some line breaks for styling sakes. 
  if (commandChecker(commands, input.toLowerCase())){
    for(let i = 0; i < commands.length; i++) {
      if(commands[i].command === input.toLowerCase()){ 
        setOutput(prevState => <>{prevState} {commands[i].payload} <br /></>)
        break;
      }
      else if (input.toLowerCase() === "clear") setOutput("")
      else continue;
    }
  }
  else setOutput(prevState => <>{prevState} -JT-CLI: {input}: command not found <br /> </>)
  
  // clear input field on submission
  setInput("")


 }

 const handleChange = (event) => {
  setInput(event.target.value)
} 

React.useEffect(()=>{
  let userAgent = navigator.userAgent;
  let browserName;
         if(userAgent.match(/chrome|chromium|crios/i)){
             browserName = "Chrome";
           }else if(userAgent.match(/firefox|fxios/i)){
             browserName = "Firefox";
           }  else if(userAgent.match(/safari/i)){
             browserName = "Safari";
           }else if(userAgent.match(/opr\//i)){
             browserName = "Opera";
           } else if(userAgent.match(/edg/i)){
             browserName = "Edge";
           }else{
             browserName="User";
           }
setUserBrowser(browserName)
}, [])



React.useEffect(()=>{
  
  const interval = setInterval(()=>{
    setCount(count + 1)
    if (count > 6) setCount(0);
    }, 150)
  
  
  return () => clearInterval(interval)

}, [count])


  return (
    <div className="terminal-window">
      <div className="terminal-bar">
        <img className="nav-icon" src={require("./images/close.png")} alt="close" ></img>
        <img className="nav-icon" src={require("./images/maximize.png")} alt="close" ></img>
        <img className="nav-icon" src={require("./images/minimize.png")} alt="close" ></img>
      </div>
      <div className="terminal-content">
        <div className="terminal-header">
            Welcome to Jon Tschida's Command Line Interface (JT-CLI) {test[count]}
            <br />
            <br />
            For a list of commands, type /help
        </div>

        {output}

        <form onSubmit={handleSubmit}>
          {`${userBrowser}:~ User$ `} <input type="text" value={input} onChange={handleChange}></input> 
        </form>
    <div ref={bottomRef}></div>
      </div>
    </div>
  );
}

export default App;
