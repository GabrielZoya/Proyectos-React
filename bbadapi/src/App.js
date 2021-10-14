import React, { useState } from "react";
import { Button } from "antd";
import Frase from "./components/Frase";

function App() {
  const [frase, setFrase] = useState({});

  const consultarApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    setFrase(frase[0]);
  };

  return (
    <div>
      <Button type="primary" onClick={consultarApi}>
        Obtener Frase Nueva
      </Button>
      <Frase frase={frase} />
    </div>
  );
}

export default App;
