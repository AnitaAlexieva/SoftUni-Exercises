
import ChatPage from "./components/ChatPage";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import { Route,Routes } from "react-router";
import Send from "./components/Send";

const url = 'http://localhost:3030/jsonstore/messenger'
function App() {

  return (
    <>
        <Navigation/>

        <Routes>
            <Route index element={<HomePage/>} />

            <Route path="/chat" element={<ChatPage url={url}/>}/>

            <Route path="/send" element={<Send />} /> 
        </Routes>
       
    </>
  )
}

export default App
