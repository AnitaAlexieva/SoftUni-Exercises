export default function UncontrolledForm() {
    return(
       
        <>

                <h2>Uncontrolled Form</h2>

                <form>
                    <div>
                        <label htmlFor="username">Username </label>
                        <input type="text" id="username" />
                    </div>
                    <div>
                        <label htmlFor="passoword">Password </label>
                        <input type="password" id="password" />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
        </>
    )
}