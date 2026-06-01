import { useEffect, useState } from "react";

function App() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/teste/")
      .then((response) => response.json())
      .then((data) => setMensagem(data.mensagem))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Comunicação React + Django</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;