import { useRef } from "react"

import { useEffect, useState } from "react"

export default function UseRef() {

    const [count, setCount] = useState(0);
    const refMounted = useRef(false);

//! Разликата между Ref and State - Ref не пререндерира елемнта

    const ref = useRef();
 
    useEffect(() => {
        if(refMounted.current){
            console.log(count,'Updated');
        }
        refMounted.current = true;
        
    }, [count])
    return (
        <div className="text-2xl font-semibold text-gray-700 text-center mb-4">
            <h2>Use Ref</h2>
            <div>{count}</div>
            <button onClick={() => setCount(s => s +1)}>+</button>
        </div>
    )
}