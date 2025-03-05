import { useState } from "react";

export default function Timer(){
    const startingValue = 0;
    const [time, setTime] = useState(startingValue)
    
    setTimeout(() => {
        //Mon optimal way
        console.log(time)
        setTime(time+1)
    }, 1000)
    return(
        <>
            <h2>Timer</h2>
            <div>{time}</div>
            <hr />
        </>
    )
}