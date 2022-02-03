/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useState } from "react";
// import DaumPost from '../components/location/DaumPost';
import DaumPostCode from 'react-daum-postcode';

import {
  Row,
  Col,
  Card,
  Button,
  Input,
  Modal,
  Divider
} from "antd";
import moment from 'moment';
import axios from "axios";
import {
  SearchOutlined
} from "@ant-design/icons";
import { LIST_SERVER } from '../components/config';


function Log() {
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [body, setBody] = useState({
    title: '',
    content: '',
    time: moment(new Date()).format('YYYY-MM-DD HH:mm '),
    addr: ''
  });

    const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

    const handleComplete = (data, event) => {
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
      setBody({ ...body, addr: fullAddress });
    setIsModalVisible(false);

    }
  
  const handleOnTile = (e) => {
    setBody({ ...body, title: e.target.value });
  }
  const handleOnContent = (e) => {
    setBody({ ...body, content: e.target.value });

  }

  const handleOnSave = () => {
    axios.post(`${LIST_SERVER}/regi_log`, body)
      .then(res => {
        if (res.status === 200) {
          console.log(res);
        } else {
          alert('fail');
      }
    })
  }
  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} className="mb-24">
          <div style={{display: 'flex'}}>
            <Input
              style={{borderRadius: '6px'}}
            className="header-search"
            placeholder="질문을 검색하세요"
            prefix={<SearchOutlined />}
          />
          <Button style={{height: '50px', marginLeft: '10px'}}>검색하기</Button>
          </div>
        </Col>
        <Col span={24} md={24} className="mb-24 ">
             
          <Card
            bordered={false}
            className="header-solid h-full"
            title={<h6 className="font-semibold m-0">일지작성</h6>}
          >
            <div >
                <h6 >현재시각</h6>
              <span>{moment(new Date()).format('YYYY-MM-DD HH:mm ')}</span>
              <Divider />
                <h6 >제목</h6>
              <Input
                name='title'
                onChange={handleOnTile}
                value={ body.title}
              />
              <Divider />

                <h6 >
                  내용
                </h6>
              <Input.TextArea
                value={ body.content}
                name='content'
                onChange={handleOnContent}
                style={{ height: '150px' }} />
              <Divider />
              
                <h6 >
                  현재 위치
                </h6>
              <Button type='primary' onClick={showModal}>
                주소 검색
              </Button>
              <Modal title="위치검색" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                { isModalVisible &&
                  <DaumPostCode
                  onComplete={handleComplete}
                  className="post-code"
                />}
              </Modal>
              <div>
                <span>{body.addr}</span>
              </div>
              <br />
              <div style={{textAlign: 'center'}}>
              <Button onClick={handleOnSave} style={{width:'100px'}}  >저장</Button>
              <Button onClick={handleOnSave} style={{ width: '100px', marginLeft: '4px' }}>취소</Button>  
              </div>
              
            </div>
          </Card>
        </Col>
      </Row>      
    </>
  );
}


export default Log;
