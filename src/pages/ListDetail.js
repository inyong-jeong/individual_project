import React, { useEffect, useState }from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button, Divider } from 'antd';
import Comments from '../components/Comments/Comments';
import { LIST_SERVER } from '../components/config';

const ListDetail = () => {
  const  id  = useParams();
  const [detail, SetDetail] = useState([]);

  useEffect(() => {
    axios.post(`${LIST_SERVER}/get_list`, id)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data.message[0]);
          SetDetail(res.data.message[0]);
        } else {
          console.log('err')
      }
    })
  },[])
  return (
    <>
      <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
          <Card bordered={false} className="criclebox h-full" title={detail.title}>
            <div >
            <Button style={{marginBottom: '6px'}}>내용</Button><p>{detail.content}</p>

            </div>
            <Divider />
            <div>
            <Button style={{marginBottom: '6px'}}> 주소</Button><p>{ detail.addr}</p>

            </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
            </Card>
          </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Comments />
        </Col>

      </Row>
    </>
  )

}

export default ListDetail;