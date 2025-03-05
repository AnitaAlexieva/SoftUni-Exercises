import {  useEffect, useState } from "react"

export default function Input(){

    const [state, setState] = useState(true)
    const [text, setText] = useState('')

    // on mount, ще се изпълни само когато за първи път се създаде нашия компонент
    //  и никога повече, заради празния масив
    useEffect(()=>{
        console.log(`On text change = ${text}`)
    }, [text])
    
    //on input change
    useEffect(()=>{
        console.log('Mounting')
    }, [])

    //on button click (state change)
    useEffect(() =>{
        console.log('On state change')
    }, [state])

    //on unmount
    useEffect(() =>{
        //Clean up function
        return() =>{
            console.log('On unmount')
        }
    }, [])

    const buttonClickHandler = () =>{
        console.log('Bitton clicked')

        //Toggle state
        setState((currentState) => !currentState)//Use updater function when cretaing state derivative 
        //setState(!state); //Not this way when depending on old state due to race conditions


    }

    const inputChangeHandler = (e) =>{
        setText(e.target.value);
    }
    return(
        <>
            <h3>Input Component</h3>

            <input type="text" onChange={inputChangeHandler} />

            <button onClick={buttonClickHandler}>Update</button>
        </>
    )
}