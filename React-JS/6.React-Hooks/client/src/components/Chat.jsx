import React, { useState } from 'react';
import { Avatar, List, Skeleton } from 'antd';
const count = 3;
 
export default function Chat({
  messages,
}){

  // const [list, setList] = useState([]);
 
  return (
    <List
      className="demo-loadmore-list"
      // loading={initLoading}
      itemLayout="horizontal"
      // loadMore={loadMore}
      dataSource={messages}
      renderItem={(message) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={false} active>
            <List.Item.Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=0" />}
              title={<a href="https://ant.design">{message.author}</a>}
              description={message.content}
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
