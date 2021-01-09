import React from "react";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    root:{
       border:"solid",
       borderColor:"black"
    }
}))



const ChildCom=(props:any)=>{
        const classes=useStyles();
    return(
        <Container className={classes.root}>
            {props.children}
        </Container>
    )
}
export default ChildCom;