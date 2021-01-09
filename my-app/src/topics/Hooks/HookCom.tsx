import React from "react";
// import UseStateHook from "./01.useStateHook";
import UseEffectHook from "./02.useEffectHook";
import ProviderCom from "./03.useContextHook/ProviderCom";
import UseReducerHook from "./04.useReducerHook";
import UseRefHook from "./05.useRefHook/01.useRefHook";
import MainCom from "./05.useRefHook/02.forwardRef/MainCom";
import ParamsLocationHistory from "./06.RouterRelatedHooks/ParamsLocationHistory";
import UseCustomHook from "./07.CustomHook/useCustomHook";
const HookCom: React.FC=()=>{
    return(
        <>
           {/* <UseStateHook/> */}
           {/* <UseEffectHook/> */}
           {/* <ProviderCom/> */} {/*UseContext Hook */}
           {/* <UseReducerHook/> */}
           {/* <UseRefHook/> */}
           {/* <MainCom/> */} {/*forwardRef Hook*/}
           {/* <ParamsLocationHistory/> */}
           <UseCustomHook/>
        </>
    )
}
export default HookCom;