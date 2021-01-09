import React from "react";
import ChildCom from "./ChildCom";

const ComponentOne=()=>{
    return(
        <h1>This is from ComponentOne</h1>
    )
}

const ComponentTwo=()=>{
    return(
        <>
        <h1>This is from ComponentTwo</h1>
        <h1>I am practicing Children Props</h1>
        </>
    )
}

const MainCom=()=>{
    return(
        <>
        <ChildCom>
        <ComponentOne/>
        </ChildCom>

        <ChildCom>
        <ComponentTwo/>
        </ChildCom>
        </>
    )
}
export default MainCom;