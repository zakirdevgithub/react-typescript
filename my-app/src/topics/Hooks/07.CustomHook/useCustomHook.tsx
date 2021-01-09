import React from "react";
import useCustom from './useCustomBody';

const UseCustomHook=()=>{
    const data=useCustom();

    return(
        <>
        <h1>{data.count}</h1>
        <button onClick={data.handleCount}>Increase</button>
        </>
    )
}

export default UseCustomHook;