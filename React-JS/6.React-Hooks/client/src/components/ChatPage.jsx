import useFetch from "../hooks/useFetch";

import Chat from "./Chat"
import { Spin } from "antd";

export default function ChatPage() {
    
      const [pending, messages]= useFetch(url, []);
    
      console.log(messages)
    return(
       <>
                 {pending
                    ? <Spin />
                    : <Chat messages={messages} />
                 }
       </>
    )
}