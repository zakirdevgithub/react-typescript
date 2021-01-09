import React,{useRef} from "react";
import ChildCom from "./ChildCom";
const MainCom=()=>{
    const inputRef=useRef<any>(null);

    const inputHandler=()=>{
        inputRef.current.value="1000";
        inputRef.current.focus();
    }

    return(
        <>
            <ChildCom ref={inputRef}/>
            <button onClick={inputHandler}>Click Me</button>
        </>

    )
}
export default MainCom;