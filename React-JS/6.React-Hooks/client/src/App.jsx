
import ChatPage from "./components/ChatPage";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import { Route,Routes } from "react-router";
import Send from "./components/Send";
import Login from "./components/Login";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

const url = 'http://localhost:3030/jsonstore/messenger'
function App() {

  const [user, setUser] = useState('');

  const userLoginHandler = (username) =>{
      setUser(username);
  }

  return (
    <>
      <UserContext.Provider value={{userLoginHandler, user}}>

          <Navigation/>

          <Routes>
              <Route index element={<HomePage/>} />

              <Route path="/chat" element={<ChatPage url={url}/>}/>

              <Route path="/send" element={<Send />} /> 

              <Route path="/login" element={<Login/>}/>

          </Routes>
      </UserContext.Provider>
       
    </>
  )
}

export default App
