import useForm from "../hooks/useForm"
import { Button, Input } from "antd";
import {SendOutlined} from '@ant-design/icons'
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
    const {userLoginHandler} = useContext(UserContext);
    const navigate = useNavigate();
    const initialFormState ={
        username:'',
        password:'',
    }
    const {
        changeHandler, 
        submitHandler, 
        values
    } = useForm((values) =>{
        userLoginHandler(values.username);
        navigate('/send')
    
    } ,initialFormState);
    
    return(
        <form onSubmit={submitHandler}>
              <Input 
                size="large" 
                name="username" 
                value={values.username}
                onChange={changeHandler}
                placeholder="Username" 
                prefix={<SendOutlined />} 
                />

                <Input 
                size="large" 
                name="password" 
                type="password"
                value={values.password}
                onChange={changeHandler}
                placeholder="Password" 
                prefix={<SendOutlined />} 
                />

                <Button type="primary" htmlType="submit">Login</Button>
        </form>
    )
}