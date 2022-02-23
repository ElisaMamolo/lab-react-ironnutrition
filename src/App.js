import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  const [foodValues, setFoods] = useState(foods);
  return (
    <div className="App">
      {foodValues.map((item) => {
        console.log(item);
        return (
          <div key={Math.random()}>
            <p>{item.name}</p>
            <img src={item.image} width={200} alt="image" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
