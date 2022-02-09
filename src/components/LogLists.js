import React from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const LogLists = ({ loglists }) => {
  const history = useHistory();
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const handleOnClick = () => {};
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={loglists}
        footer={
          <div>
            <b>다음</b> 로...
          </div>
        }
        renderItem={(item) => (
          <List.Item
            style={{ position: "relative", whiteSpace: "pre-wrap" }}
            onClick={() => {
              history.push(`/List/Detail/${item.log_idx}`);
            }}
            className="list_item"
            key={item.log_idx}
            actions={[
              <div>
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />
                <br />
                <span>즐겨찾기</span>
              </div>,
              <div>
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />
                <br />
                <span>좋아요</span>
              </div>,
              <div>
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />
                <br />
                <span>댓글달기</span>
              </div>,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.title}>{item.title}</a>}
              description={<div>{item.content}</div>}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default LogLists;
