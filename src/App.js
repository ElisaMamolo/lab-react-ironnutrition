import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';

function App() {
  const [foodValues, setFoods] = useState(foods);
  const [foodValuesData, setFoodsData] = useState(foods);

  function updateFoodsList(newCard) {
    const updatedFoodValues = [...foodValues, newCard];
    const updatedfoodValuesData = [...foodValuesData, newCard];

    setFoodsData(updatedfoodValuesData);
    setFoods(updatedFoodValues);
  }

  const filterCardList = (str) => {
    let filteredCardList;

    if (str === 'All') {
      filteredCardList = foodValuesData;
    } else {
      filteredCardList = foodValuesData.filter((item) => {
        return 'hi';
      });
    }

    setFoods(filteredCardList);
  };

  function deleteFromFoodList(param) {
    let copyFoodValues = [...foodValues];

    const filteredItems = copyFoodValues.filter(function (item) {
      return item.name !== param.name;
    });

    setFoods(filteredItems);
  }

  return (
    <div className="App">
      <Search searchProp={filterCardList} />
      <Row>
        <AddFoodForm addItem={updateFoodsList} />
      </Row>

      <Row>
        {foodValues.map((item) => {
          return (
            <FoodBox
              food={item}
              key={Math.random()}
              deletedItem={deleteFromFoodList}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
