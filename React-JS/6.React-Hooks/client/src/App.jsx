
import ChatPage from "./components/ChatPage";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import { Route,Routes } from "react-router";

const url = 'http://localhost:3030/jsonstore/messenger'
function App() {

  return (
    <>
        <Navigation/>

        <Routes>
            <Route index element={<HomePage/>} />

            <Route path="/chat" element={<ChatPage/>}/>

              
        </Routes>
       
    </>
  )
}

export default App
