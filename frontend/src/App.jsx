import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Inicio from "./pages/Inicio";
import Conteudos from "./pages/Conteudos";
import Calendario from "./pages/Calendario";
import Tecnologias from "./pages/Tecnologias";
import MetodosEstudo from "./pages/MetodosEstudo";
import Classificacao from "./pages/Classificacao";
import Configuracoes from "./pages/Configuracoes";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-full flex flex-row">

        <Sidebar />

        <main className="w-3/4 bg-base-white overflow-hidden">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/conteudos" element={<Conteudos />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/tecnologias" element={<Tecnologias />} />
            <Route path="/metodos-estudo" element={<MetodosEstudo />} />
            <Route path="/classificacao" element={<Classificacao />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;