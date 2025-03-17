import useFetch from "./hooks/useFetch"

import Chat from "./components/Chat"
import { Spin } from "antd";
import Navigation from "./components/Navigation";

const url = 'http://localhost:3030/jsonstore/messenger'
function App() {

  const [pending, messages]= useFetch(url, []);

  console.log(messages)
  return (
    <>
        <Navigation/>
        {pending
          ? <Spin />
          : <Chat messages={messages} />}
    </>
  )
}

export default App
