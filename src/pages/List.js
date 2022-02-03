import React, { useEffect, useState, useRef } from 'react';
import { Input, Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { GetLists } from '../_actions/user_actions';
import  LogLists  from '../components/LogLists'
const {Search} = Input
const List = () => {

  const dispatch = useDispatch();
  //infinite scroll variable
  const observerRef = useRef();
  
  const [loglists, setLogList] = useState([])
  const [data, setData] = useState({
    page_no: 1,
    srch: ''
  })
  const handleOnSearch = () => {
    console.log(1)
  }
  useEffect(() => {
    dispatch(GetLists(data))
      .then(res => {
      setLogList(res.payload.message)
    })
},[data])
  
  // console.log(LogList)
  
  return (
    <>
      <Row>
        <Col span={24}>
          <Search
            onSearch={handleOnSearch}
            placeholder='검색하세요'
             />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          {loglists.length > 0 ? 
              <LogLists
              loglists={loglists}
            />
            // <div key={v.log_idx}>{ v.title}</div>
          
            :
            <>
            <p>작성된 일지가 없습니다.</p>
            </>
        }
        </Col>
      </Row>
      {/* <div ref={observer}/> */}
    </>
)
}

export default List;