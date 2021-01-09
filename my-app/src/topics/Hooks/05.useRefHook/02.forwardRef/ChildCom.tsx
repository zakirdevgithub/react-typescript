import React,{forwardRef} from "react";

const ChildCom=(props:any, ref:any)=>{
    return(
        <>
        <input ref={ref}/>
        </>
    )
}
export default forwardRef(ChildCom);