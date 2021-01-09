/*
    useReducer হুক প্রায় useState হুকের মতই। কিন্তু useReducer হুকে সুবিধা বেশি। 
    যেমন আমরা  লজিক ব্যবহার করতে পারি। useState হুক state কে পরিবর্তন করার 
    পর আর কোন কাজ করে না। কিন্তু useReducer হুক state পরিবর্তন করে এবং তার 
    সাথে সেই পরিবর্তনের পরে আরও কিছু করার সুযোগ করে দেয়। যেমনঃ আমি যদি 
    কোন eCommerce সাইট এ Add To Cart করি তাহলে একটা আইটেম ত হবেই সাথে এটাও 
    সেট করে দিতে পারব যে Add To Cart করার সাথে সাথে একটা ইমেইল যেন পৌঁছে যায় 
    কাস্টমারের কাছে।
    useReducer= useState + Logic
*/

import React, {useReducer } from "react";
import { Container, Typography, Button } from "@material-ui/core";

const UseReducerHook = () => {
  

  const callbackFunction=(initialValue:number, Action:any)=>{
    if(Action==="increament"){
       return initialValue + 1;
    }
    else if(Action==="decreament"){
       return initialValue-1;
    }
    else{
        return initialValue;
    }
  }

  const initialValue:number=0;
  const [count, setCount] = useReducer(callbackFunction, initialValue);

  return (
    <Container>
      <Typography variant="h3">{count}</Typography>
      <Button
        onClick={() => setCount("increament")}
        variant="contained"
        color="primary"
      >
        Increase
      </Button>

      <Button
        onClick={() => setCount("decreament")}
        variant="contained"
        color="secondary"
      >
        Decrease
      </Button>
    </Container>
  );
};

export default UseReducerHook;
