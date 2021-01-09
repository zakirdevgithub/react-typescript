import React from "react";
import {useParams, useLocation, useHistory} from "react-router-dom";

// const Users=({match}:{match:any})=>{
//     return(
//         <h1>My name is {match.params.fname} {match.params.lname}</h1>
//     )
// }

const Users=()=>{
    const {fname,lname}=useParams<any>();
    const location=useLocation();
    const history=useHistory();
    return(
        <>
        <h1>My name is {fname} {lname}</h1>
        <h1>{location.pathname}</h1>
        <button onClick={()=> history.goBack()}>Backward</button>
        <button onClick={()=> history.push("/contact")}>Contact Page</button>

        </>
    )
}

export default Users;