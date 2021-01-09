import {useState} from "react";

const useCustom=()=>{
    const [count, setCount]=useState<any>(0);

    const handleCount=()=>{
        setCount(count+1)
    }

    return {count, handleCount}
}

export default useCustom;