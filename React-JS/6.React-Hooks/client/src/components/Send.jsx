import {SendOutlined} from '@ant-design/icons'

import { Input, Button,message } from "antd";

export default function Send() {
    const [messageApi, contextHolder] = message.useMessage();

    const formSubmit = async(e) =>{
        e.preventDefault();

        const formData = new FormData(e.target)

        const message = formData.get('message')

        await fetch('http://localhost:3030/jsonstore/messenger',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body:JSON.stringify({
                author:'John Doe',
                content:message,
            })
        })

        messageApi.open({
            type:'success',
            content:'Message sent seccessfully'
        })
    }

    return(
        <>
            {contextHolder}
        <form onSubmit={formSubmit}>
                <Input size="large" name="message" placeholder="large size" prefix={<SendOutlined />} />
                <Button type="primary" htmlType='submit'>Send</Button>
        </form>
        </>
    )
}