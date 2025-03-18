
import ChatPage from "./components/ChatPage";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import { Route,Routes } from "react-router";
import Send from "./components/Send";
import Login from "./components/Login";
import { useState } from "react";

const url = 'http://localhost:3030/jsonstore/messenger'
function App() {

  const [user, setUser] = useState('');

  const userLoginHandler = (username) =>{
      setUser(username);
  }

  return (
    <>
        <Navigation/>

        <Routes>
            <Route index element={<HomePage/>} />

            <Route path="/chat" element={<ChatPage url={url}/>}/>

            <Route path="/send" element={<Send user = {user} />} /> 

            <Route path="/login" element={<Login onLogin={userLoginHandler} />}/>

        </Routes>
       
    </>
  )
}

export default App
