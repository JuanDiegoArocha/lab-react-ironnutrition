
import { Card, Col, Button } from "antd";

// Create the FoodBox component
function FoodBox({ food }) {
  // Imprime el objeto food en la consola para verificar
  console.log(food);

  // Desestructura las propiedades del objeto food
  const { name, calories, image, servings } = food;

  return (
    <Col>
      <Card
        title={name} // El título del card es el nombre del alimento
        style={{ width: 230, height: 300, margin: 10 }} // Estilo del card
      >
        <img src={image} height={60} alt="food" /> 
        {/* // Muestra la imagen del alimento */}
        <p>Calories: {calories}</p> 
        {/* // Muestra la cantidad de calorías del alimento */}
        <p>Servings: {servings}</p> 
        {/* // Muestra la cantidad de porciones del alimento */}
        <p>
          <b>Total Calories: {calories * servings} kcal</b> 
          {/* // Muestra el total de calorías multiplicando las calorías por las porciones */}
        </p>
        <Button type="primary">Delete</Button> 
        {/* // Botón para eliminar el alimento */}
      </Card>
    </Col>
  );
}

export default FoodBox;

