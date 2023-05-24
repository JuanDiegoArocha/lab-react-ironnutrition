import { useState } from "react"
import { Input, Button, Form, Divider } from "antd";


function AddFoodForm({ handleAddFood }) {
  // Crear variables de estado para almacenar los valores de entrada del formulario
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  // Manejar el envío de formularios
  const handleSubmit = (patata) => {
    patata.preventDefault();

    // Crear un nuevo objeto de comida
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings
    };

    // Llame a la función handleAddFood pasada a través de accesorios para agregar la nueva comida
        handleAddFood(newFood);

        // Borrar los valores de entrada del formulario
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <Form.Item label="Name">
        <Input
          value={name}
          type="text"
          onChange={(patata) => setName(patata.target.value)}
        />
      </Form.Item>

      <Form.Item label="Image">
        <Input
          value={image}
          type="text"
          onChange={(patata) => setImage(patata.target.value)}
        />
      </Form.Item>

      <Form.Item label="Calories">
        <Input
          value={calories}
          type="number"
          onChange={(patata) => setCalories(patata.target.value)}
        />
      </Form.Item>

      <Form.Item label="Servings">
        <Input
          value={servings}
          type="number"
          onChange={(patata) => setServings(patata.target.value)}
        />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </Form>
  );
}


export default AddFoodForm;
