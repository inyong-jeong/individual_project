import React from "react";
import { useSelector } from "react-redux";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import Highlighter from "react-highlight-words";

const LogLists = ({ loglists }) => {
  const state = useSelector((state) => state.User);
  const history = useHistory();
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

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
            <b>다음 페이지</b> 로...
          </div>
        }
        renderItem={(item) => (
          <List.Item
            style={{
              position: "relative",
              whiteSpace: "pre-wrap",
              overFlow: "hidden",
              textOverflow: "ellipsis",
            }}
            onClick={() => {
              history.push(`/List/Detail/${item.log_idx}`);
            }}
            className="list_item"
            key={item.log_idx}
            // actions={[
            //   <div>
            //     <IconText
            //       icon={StarOutlined}
            //       text="13"
            //       key="list-vertical-star-o"
            //     />
            //     <br />
            //     <span>즐겨찾기</span>
            //   </div>,
            //   <div>
            //     <IconText
            //       icon={LikeOutlined}
            //       text="23"
            //       key="list-vertical-like-o"
            //     />
            //     <br />
            //     <span>좋아요</span>
            //   </div>,
            //   <div>
            //     <IconText
            //       icon={MessageOutlined}
            //       text="2"
            //       key="list-vertical-message"
            //     />
            //     <br />
            //     <span>댓글달기</span>
            //   </div>,
            // ]}
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
              title={
                <div>
                  <Highlighter
                    searchWords={[state.keyword]}
                    autoEscape={true}
                    textToHighlight={item.title}
                    highlightStyle={{ color: "blue" }}
                  />
                </div>
              }
              description={
                <div
                  style={{
                    fontSize: 12,
                    color: "#333333",
                    textOverflow: "ellipsis",
                    display: "block",
                    wordWrap: "break-word",
                    overflow: "hidden",
                    maxHeight: "8.6em",
                    lineHeight: "1.8em",
                    fontWeight: 300,
                  }}
                >
                  <Highlighter
                    searchWords={[state.keyword]}
                    autoEscape={true}
                    textToHighlight={item.content}
                    highlightStyle={{ color: "blue" }}
                  />
                </div>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default LogLists;
