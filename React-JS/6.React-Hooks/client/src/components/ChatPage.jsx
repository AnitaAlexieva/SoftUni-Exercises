import useFetch from "../hooks/useFetch";

import { Spin } from "antd";
import Chat from "./Chat";


export default function ChatPage({url}) {
    
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