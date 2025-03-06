import { useRef } from "react"
import './UnifiedControlledForm.css';

//Dont't do this just learn
export default function UncontrolledFormRef() {

    const submitRef = useRef();

    const wait = (time) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Wait is over!');
            }, time)
        })
    }

    const submitHandler = async (e) => {

        //Set pending status

        submitRef.current.disabled = true

        //Prevent page refresh
        e.preventDefault()

        //Get form data from dom
        const formData = new FormData(e.currentTarget)

        //Get form values
        const username = formData.get('username');
        const password = formData.get('password');

        //Call rest api
        await wait(1500);

        //Remove Pending status
        submitRef.current.disabled = false

        //Result
        console.log({ username, password });

    }
    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Uncontrolled Form Ref</h2>

            <form onSubmit={submitHandler} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto space-y-4">
                <div>
                    <label htmlFor="username" className="block text-gray-600 font-medium mb-1">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-600 font-medium mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <Submit ref={submitRef} />
            </form>
        </>
    )
}

export default function Submit({ref}) {
    return (
        <div>
            <input
                ref={ref}
                type="submit"
                value="Login"
                className={`submit-btn w-full py-2 text-white font-medium rounded-lg transition ${false ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            />
        </div>
    )
}