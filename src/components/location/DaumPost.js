import React, { useEffect}from 'react';
import DaumPostCode from 'react-daum-postcode';

const DaumPost = ({ location, setLocation, isModalVisible }) => {
  
  
  const handleComplete = (data, event) => {
    console.log(data)
      console.log(event)
    
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
        //fullAddress -> 전체 주소반환
      // return fullAddress;
      console.log(fullAddress);
      setLocation(fullAddress);
    }
  
  const handleOnClose = (value) => {
    console.log(value);
  }
  return (
    <>
<DaumPostCode
    onComplete={handleComplete}
    onClose={ handleOnClose}
    // autoClose
    className="post-code"
  />
    
    </>
    
  );
}
export default DaumPost;