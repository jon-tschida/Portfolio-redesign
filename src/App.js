import React from "react";
import CLIPannel from "./components/CLIPannel.js";
import Minimized from "./components/Minimized.js";


// function for checking to see if a string is present in the commands list
const commandChecker = (arr, str) =>{

  for (let i = 0; i < arr.length; i++){
    if (arr[i].command === str) return true;
    else continue;
  }
  return false;
}

function App() {
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isClosed, setIsClosed] = React.useState(false)

  const handleMinimize = () => setIsMinimized(prevState => !prevState)
return(
  <>
  <div className="silly-goose">{isClosed ? `Curiousity killed the CLI.` : `Nothing to see here...`}</div>
  {isMinimized ? 
  <Minimized handleMinimize={handleMinimize}/>
  :
  <CLIPannel commandChecker={commandChecker} handleMinimize={handleMinimize} isClosed={isClosed} setIsClosed={setIsClosed}/>
  }
  </>
)
}

export default App;
