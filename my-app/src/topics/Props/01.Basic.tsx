import React from "react";
import {Typography} from "@material-ui/core";

const Basic =({hello}:{hello:string})=>{
    return(
        <>
        <Typography variant="h1">{hello}</Typography>
        </>
    )
}
export default Basic;