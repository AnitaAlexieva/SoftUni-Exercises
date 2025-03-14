import useFetch from "./hooks/useFetch"

import Chat from "./components/Chat"
import { Spin } from "antd";

const url = 'http://localhost:3030/jsonstore/messages'
function App() {

  const [pending, messages]= useFetch(url);
  return (
    <>
        {pending
          ? <Spin />
          : <Chat messages={messages} />}
    </>
  )
}

export default App
