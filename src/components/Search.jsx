import { useState } from "react";
import { Input, Divider } from "antd";

function Search({ handleSearch }) {
  // Crear una variable de estado para almacenar la consulta de búsqueda
  const [query, setQuery] = useState("");

  // Manejar el cambio de entrada de búsqueda
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Llame a la función handleSearch pasada a través de accesorios para realizar la búsqueda
    handleSearch(value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={query} type="text" onChange={handleInputChange} />
    </>
  );
}

export default Search;