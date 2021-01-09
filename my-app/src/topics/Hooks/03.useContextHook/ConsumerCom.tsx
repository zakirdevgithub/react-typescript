/*
এক Component থেকে অন্য Component এ ডাটা পাঠানোর ক্ষেত্রে  
useContext হুক Props এর alternative হিসেবে কাজ করে ।

*/
import React,{useContext} from "react";
import {FirstName,LastName} from "./ProviderCom";
import {Typography} from "@material-ui/core";

const ConsumerCom:React.FC=()=>{
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
    return (
        <>
        <Typography>{fname} {lname}</Typography>
        </>
    )
}
export default ConsumerCom;