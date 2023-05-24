import logo from './logo.svg';
import './App.css';
import Foods from "./foods.json"
import { useState } from "react"
import FoodBox from './components/FoodBox';
import AddFoodForm from "./components/AddFoodForm"
import { Input, Divider } from "antd";
import Search from './components/Search';

function App() {

  // Guardamos los alimentos en una variable de estado
  const [foodList, setFoodList] = useState(Foods);
  const [filteredFoodList, setFilteredFoodList] = useState(Foods);

  // Imprimimos los alimentos en la consola para verificar
  console.log(foodList);

  const handleAddFood = (newFood) => {
    // Add the new food to the foodList array
    setFoodList([...foodList, newFood]);
  };

    // Función para manejar la búsqueda
    const handleSearch = (search) => {
      // Filtrar la lista de alimentos según la consulta de búsqueda
      const filteredFoods = foodList.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
  
      // Actualizar la lista filtrada
      setFilteredFoodList(filteredFoods);
    };



  return (
    <div className="App">
      <Search handleSearch={handleSearch} />

      <Divider>Food List</Divider>

      {/* Mapeamos sobre la lista de alimentos */}
      {/* {foodList.map((food) => (
        <div key={food.id}>
          <p>{food.name}</p>
          <img src={food.image} alt={food.name} width={100} />
        </div>
      ))} */}

     {/* Mapee sobre la lista de alimentos y represente el componente Food Box para cada objeto de alimento */}
      {foodList.map((food) => (
        <FoodBox key={food.id} food={food} />
      ))}

     {/* Render the AddFoodForm component and pass the handleAddFood function */}
      <AddFoodForm handleAddFood={handleAddFood} />

     {/* Iteracion 2
      Renderice una sola instancia del componente FoodBox
      <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        }}
      /> */}



    </div>
  );
}

export default App;
