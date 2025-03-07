
import { useFormStatus } from "react-dom";

const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wait is over!");
        }, time);
    });
};

export default function FormAction() {
    async function submitAction(formData) {
        // //Set pending status
        // setPending(true);

        // //Prevent page refresh
        // e.preventDefault()

        // //Get form data from dom
        // const formData = new FormData(e.currentTarget)

        //Get form values
        const username = formData.get("username");
        const password = formData.get("password");

        console.log("Submitting:", { username, password });

        //Call rest api
        await wait(1500);

        // //Clear form
        // e.target.reset();

        // //Remove Pending status
        // setPending(false);

        //Result
        console.log({username, password});

    }

    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Form Action</h2>

            <form action={submitAction} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto space-y-4">
                <div>
                    <label htmlFor="username" className="block text-gray-600 font-medium mb-1">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-600 font-medium mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <Submit />
            </form>
        </>
    );
}

function Submit() {
    const status = useFormStatus();

    return (
        <div>
            <input
                type="submit"
                value={status.pending ? "Submitting..." : "Login"}
                disabled={status.pending}
                className={`w-full py-2 text-white font-medium rounded-lg transition ${
                    status.pending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                }`}
            />
        </div>
    );
}
