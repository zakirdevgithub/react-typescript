import React from "react";


const FormCom:React.FC=()=>{

    const onSubmitHandler=(e:any)=>{
        e.preventDefault();
        console.log(e.target.myName.value)
    }
    const onChangeHandler=(e:any)=>{
        console.log(e)
    }
    return(
        <>
        <form onSubmit={(e)=> onSubmitHandler(e)}>
            <input type="text" name="myName" />
            <select name="myOptions" onChange={(e)=>onChangeHandler(e.target.value)}>
                <option>Zakir</option>
                <option>Keya</option>
            </select>
            <input type="submit"/>

        </form>
        </>
    )
}

export default FormCom;