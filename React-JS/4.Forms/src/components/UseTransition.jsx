import { useState, useTransition } from "react"


export default function UseTransition() {

    const [name, setName] = useState('');
    const [pending, startTransition] = useTransition()

    const submitHandler = (e) =>{

        //Prevent page refresh
        e.preventDefault()

        //Get form data from dom
        const formData = new FormData(e.currentTarget)

        //Get form values
        const character = formData.get('character');
      
        startTransition(async() =>{
            //Call rest api
              const response = await fetch(`https://swapi.dev/api/people/${character}`)
              const result = await response.json();
              startTransition(() => setName(result.name));
        })
        
    }
    return(
        <>
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Use transition</h2>

                <form onSubmit={submitHandler} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto space-y-4">
                    <div>
                        <label htmlFor="character" className="block text-gray-600 font-medium mb-1">Charcter - {name}</label>
                        <input 
                            type="text" 
                            id="character" 
                            name="character" 
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        />
                    </div>

                    <div>
                        <input 
                            type="submit" 
                            value="Get" 
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