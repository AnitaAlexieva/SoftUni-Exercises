import React, { useState } from 'react';
import {HomeOutlined,  MessageOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Chat',
    key: 'chat  ',
    icon: <MessageOutlined />,

  },

];
export default function Navigation(){
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
