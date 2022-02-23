import { Divider, Input, Col } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  console.log(props);
  const [inputValue, setinputValue] = useState('');

  const handleSearchInput = (e) => {
    setinputValue(e.target.value);
    props.searchProp(e.target.value);
  };

  return (
    <Col span={8}>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={inputValue} type="text" onChange={handleSearchInput} />
    </Col>
  );
}

export default Search;
