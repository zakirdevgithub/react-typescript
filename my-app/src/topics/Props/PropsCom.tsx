import React from "react";
// import Basic from "./01.Basic";
// import DataTypes from "./02.DataTypes";
import ButtonChildren from "./03.ButtonChildren";

const PropsCom:React.FC=()=>{
    return(
        <>
        {/*<Basic hello="Hello, I am Zakir Hossain. Do you know me?"/>*/}

        {/*
        <DataTypes 
        name="Zakir Hossain" 
        age={26} 
        languages={["Python", "JavaScript","C++"]}
        add={()=>{
            alert("Zakir You Are Awesome")
        }}
        country={(v)=> {
            return v;
        }}
        student={{name:"Moni", age:25}}
        friend={{name:"Shovon", age:26}}
        isActive={true}
        />
        */}

        {/*<ButtonChildren clickEvent={e=>{
            alert("Button1 Clicked");
        }}> Click Me</ButtonChildren> */}

        <ButtonChildren clickEvent={e=>{
            alert("Button2 Clicked");
        }}> 
        <img  src="https://1.bp.blogspot.com/-dfudCfGSVX0/XvrwpMihj4I/AAAAAAAAADc/TfvK37W9ibcxspEnOAPAYqjmUDFeV2H8gCK4BGAsYHg/s320/zakir.jpg" alt="Zakir"/>
        </ButtonChildren>
        </>
    )
}

export default PropsCom;