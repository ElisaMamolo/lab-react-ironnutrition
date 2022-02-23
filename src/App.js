import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodValues, setFoods] = useState(foods);
  const [foodValuesData, setFoodsData] = useState(foods);

  function updateFoodsList(newCard) {
    const updatedFoodValues = [...foodValues, newCard];
    const updatedfoodValuesData = [...foodValuesData, newCard];

    setFoodsData(updatedfoodValuesData);
    setFoods(updatedFoodValues);
  }

  return (
    <div className="App">
      <Row>
        <AddFoodForm addItem={updateFoodsList} />
      </Row>

      <Row>
        {foodValues.map((item) => {
          return <FoodBox food={item} />;
        })}
      </Row>
    </div>
  );
}

export default App;
