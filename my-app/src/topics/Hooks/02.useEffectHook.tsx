/*
    যদি এমন চাই যে একটি Component রেন্ডার হউয়ার পর কিছু একটা হক তাহলে আমরা useEffect 
    হুক ব্যবহার করি। এখানে Array ব্যবহার করে বলে দিতে পারি কোন Variable এর জন্য
    এটা কল হবে।
*/

import React, { useState, useEffect } from "react";
import { Container, Button } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";

const UseEffectHook: React.FC = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    alert("Clicked");
  }, [num1]);

  return (
    <>
      <Container maxWidth="sm">
        <Button
          onClick={() => {
            setNum1(num1 + 1)
          }}
          variant="contained"
          color="primary"
        >
          First Number {num1}
        </Button>
        <Button
          onClick={() => {
            setNum2(num2 + 1)
          }}
          variant="contained"
          color="secondary"
        >
          Second Number {num2}
        </Button>
      </Container>
    </>
  );
};
export default UseEffectHook;
