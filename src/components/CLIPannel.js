import React from 'react'
import { commands } from '../commands'
// import Draggable from 'react-draggable'

console.log(`hey`)

export default function CLIPannel(props) {
    let { commandChecker, handleMinimize, isClosed, setIsClosed } = props

    const terminalInput = React.useRef(null);
    const [test] = React.useState(["|", "/" , "-", "\\", "|", "/", "-", "\\"])
    const [count, setCount ] = React.useState(0)
    const [userBrowser, setUserBrowser] = React.useState(``)
    const [input, setInput] = React.useState("")
    const [output, setOutput] = React.useState("")
    const [isMax, setIsMax] = React.useState(false)
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      // First we check to see if the command is in the list via commandChecker function (located in App.js), commandChecker returns true or false.
      // If the command is present, then we loop through the list and look for the matching command. 
      // Once we find the matching command, we set our output to the command payload, including some line breaks for styling sakes. 
      if (commandChecker(commands, input)){
        let strCheck = input.trimEnd();
        for(let i = 0; i < commands.length; i++) {
          if(commands[i].command === strCheck){ 
            setOutput(prevState => <>{prevState} {commands[i].payload} <br /></>)
            break;
          }
          else if (strCheck === "clear") setOutput("")
          else if (strCheck === "exit") {
            setTimeout(()=>{
                setIsClosed(true)
            }, 1200)
          }
          else continue;
        }
      }
      else setOutput(prevState => <>{prevState} -JT-CLI: {input}: command not found. <br /> </>)
      
      // clear input field on submission
      setInput("")
     }
    
     const handleChange = (event) => {
      setInput(event.target.value.toLowerCase().trimStart())
    } 

    const handleClose = () => setIsClosed(true)
    const handleMax = () => setIsMax(prevState => !prevState);
    
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
        // <Draggable  >
        <div className={isMax ? `terminal-window-full` : isClosed ? `hidden` : `terminal-window`} onClick={()=> terminalInput.current.focus()}>
          <div className="terminal-bar">
            <img className="nav-icon" src={require("../images/close.png")} alt="close" onClick={handleClose}></img>
            <img className="nav-icon" src={require(`../images/${isMax ? "window-resore" : "maximize"}.png`)} alt="maximize" onClick={handleMax}></img>
            <img className="nav-icon" src={require("../images/minimize.png")} alt="minimize" onClick={handleMinimize} ></img>
          </div>
          <div className="terminal-content">
            <div className="terminal-header">
                Welcome to Jon Tschida's Command Line Interface (JT-CLI) {test[count]}
                <br />
                <br />
                <u>For a list of commands, type /help</u>
            </div>
    
            {output}
    
            <form onSubmit={handleSubmit}>
              {`${userBrowser}:~ User$ `} <input type="text" value={input} onChange={handleChange} autoComplete="off" ref={terminalInput}></input> 
            </form>
          </div>
        </div>
        // </Draggable>
      );
}
