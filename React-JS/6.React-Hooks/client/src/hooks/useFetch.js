import {useState, useEffect}  from 'react'

export default function useFetch(url, defaultState = {}) {
    const [state, setState] = useState(defaultState);
    const [pending, setPending] = useState(true)

    useEffect(() =>{
        
        setPending(true);
        const abortController = new AbortController();

        fetch(url)
            .then(res => res.json())
            .then(result =>{
                setState(Object.values(result));
            })
            .finally(()=>{
                setPending(false)
            })

            return () =>{
                abortController.abort();
            }
    },[url])


    return [pending, state]
}