import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';

function App() {
  const [foodValues, setFoods] = useState(foods);
  return (
    <div className="App">
      {foodValues.map((item) => {
        return <FoodBox food={item} />;
      })}
    </div>
  );
}

export default App;
