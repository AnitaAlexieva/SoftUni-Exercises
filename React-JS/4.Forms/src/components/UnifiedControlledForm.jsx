import { useState } from "react"

export default function UnifiedControlledForm() {

    const [pending, setPending] = useState(false);
    const [values, setValues] = useState({});

    const wait = (time) =>{
        return new Promise((resolve) =>{
            setTimeout(() =>{
                resolve('Wait is over!');
            },time)
        })
    }

    const submitHandler = async(e) =>{

        //Set pending status
        setPending(true);

        //Prevent page refresh
        e.preventDefault()

        //Call rest api
        await wait(1500);

        //Remove Pending status
        setPending(false);

        //Result
        console.log({username: values.username,password: values.password});

    }

    const changeHandler = (e) =>{
        
        setValues(state => ({...state, [e.target.name]:e.target.value}))
    }

    return(
        <>
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Unified Controlled Form</h2>

                <form onSubmit={submitHandler} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-gray-600 font-medium mb-1">Username</label>
                        {/* If you are using value you need to use onChange */}
                        <input 
                            type="text" 
                            id="username" 
                            name="username"
                            value={values.username || ''}
                            onChange={changeHandler} 
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-600 font-medium mb-1">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={values.password ?? ''}
                            onChange={changeHandler}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        />
                    </div>

                    <div>
                        <input 
                            type="submit" 
                            value="Login" 
                            disabled={pending} 
                            className={`w-full py-2 text-white font-medium rounded-lg transition ${
                                pending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                            }`} 
                        />
                    </div>
                </form>
        </>
    )
}