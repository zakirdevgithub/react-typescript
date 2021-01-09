/*
এক Component থেকে অন্য Component এ ডাটা পাঠানোর ক্ষেত্রে  
useContext হুক Props এর alternative হিসেবে কাজ করে ।

*/

import React,{createContext} from "react";
import ConsumerCom from "./ConsumerCom";


const FirstName=createContext("");
const LastName=createContext("");

const ProviderCom:React.FC =()=>{
    return(
        <>
        <FirstName.Provider value={"Zakir"}>
            <LastName.Provider value={"Hossain"}>
                <ConsumerCom/>
            </LastName.Provider>
        </FirstName.Provider>
        </>
    )
}
export default ProviderCom;
export {FirstName, LastName};