import {SendOutlined} from '@ant-design/icons'

import { Input, Button,message } from "antd";
import useForm from '../hooks/useForm';

export default function Send() {
    const [messageApi, contextHolder] = message.useMessage();

    const formSubmit = async(values) =>{
        await fetch('http://localhost:3030/jsonstore/messenger',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body:JSON.stringify({
                author:'John Doe',
                content: values.message,
            })
        })

        messageApi.open({
            type:'success',
            content:'Message sent seccessfully'
        })
    }

    const {values, changeHandler, submitHandler} = useForm({
        message: '',
        author:'',
    },formSubmit)

  

    return(
        <>
            {contextHolder}
        <form onSubmit={submitHandler}>

                <Input 
                size="large" 
                name="message" 
                value={values.message}
                onChange={changeHandler}
                placeholder="large size" 
                prefix={<SendOutlined />} 
                />

                <Button type="primary" htmlType='submit'>Send</Button>
        </form>
        </>
    )
}