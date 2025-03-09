
import { useActionState } from "react";
import { useFormStatus } from "react-dom";


export default function UseActionState() {
    const action = async(state, formData) => {
        
        const charId = formData.get('character')
        //Return rest api
        const response = await fetch(`https://swapi.dev/api/people/${charId}`)
        const result = await response.json();

        //Result
        return result.name

    }

    const initialFormState = {character: ''}

    //This formAction is Client action(works in transition)
    const [state, formAction, pending] = useActionState(action, initialFormState)
    
    console.log(state);
    
    
    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">UseActionState</h2>

            <form action={formAction} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto space-y-4">
            <div>
                        <label htmlFor="character" className="block text-gray-600 font-medium mb-1">Charcter</label>
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
                value={pending ? "Submitting..." : "Login"}
                disabled={pending}
                className={`w-full py-2 text-white font-medium rounded-lg transition ${
                    pending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                }`}
            />
        </div>
            </form>
        </>
    );
}


