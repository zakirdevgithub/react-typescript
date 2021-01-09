/*
 useRef হুক DOM manipulation বা কোন একটা Element কে পরিবর্তন করতে 
 ব্যবহার হয়। যেমন আমরা যদি চাই "h1" element এর ভিতরে যে text আছে 
 তার কালার পরিবর্তন করবো তাহলে সেখানে useRef হুক ব্যবহার করা যেতে পারে।
 এরকম অনেক কিছুই করতে পারি একটা element এর সাথে useRef এর সাহায্যে।
 বিঃদ্রঃ useRef কম ব্যবহার করাই ভালো।
*/
import React,{useRef} from "react";

const UseRefHook=()=>{
    const inputRef=useRef<any>(null);
    const textRef=useRef<any>(null);
    
    const inputHandler=()=>{
        inputRef.current.value="1000";
        inputRef.current.focus();
    }

    const clickHandler=()=>{
        textRef.current.style.color="red";
        textRef.current.style.border="2px solid green";
    }

    return(
        <>
        <input ref={inputRef} type="text"/>
        <button onClick={inputHandler}>Click Me</button>

        <h1 ref={textRef}>Hello useRef</h1>
        <button onClick={clickHandler}>Click Me</button>
        </>
    )
}

export default UseRefHook;