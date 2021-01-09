/*কোন একটি Variable এর value যদি পরিবর্তন করতে চাই তাহলে 
useState হুক ব্যবহার করে করতে পারি। যেমনঃ যদি চাই কোন একটি বাটনে ক্লিক করবো
আর একটা নাম্বার বাড়তে থাকবে তাহলে সেখানে আমরা useState হুক ব্যবহার করতে পারি।
*/
import React,{useState} from "react";
import {Container,Typography, Button, TextField, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    root:{
        height:"100vh",
        width:"100vw",
        backgroundColor:theme.palette.grey[200]
    },
    paper:{
        padding:theme.spacing(10)
    }
}))

type Props={

}

const UseStateHook:React.FC<Props>=()=>{
    const classes=useStyles();
    const [name,setName]=useState<String>("");
    const [number, setNumber]=useState<number>(0);
    return(
        <>
        <Container className={classes.root}>
          
            <Paper className={classes.paper}>
            <Typography>{name}</Typography>
            <TextField placeholder="Enter Your Name"
             label="Name"
             onChange={(e:any)=>setName(e.target.value)}
             />
            <Typography>{number}</Typography>
            <Button onClick={()=>setNumber(number+1)} color="primary" variant="contained">Increase</Button>
            </Paper>
 
        </Container>
        </>
    )
}

export default UseStateHook;