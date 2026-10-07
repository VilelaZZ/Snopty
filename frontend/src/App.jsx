import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Inicio from "./pages/Inicio";
import Conteudos from "./pages/Conteudos";
import Calendario from "./pages/Calendario";
import Tecnologias from "./pages/Tecnologias";
import MetodosEstudo from "./pages/MetodosEstudo";
import Classificacao from "./pages/Classificacao";
import Configuracoes from "./pages/Configuracoes";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <BrowserRouter>

      <div className="h-screen w-full flex overflow-hidden">

        <Sidebar />

        <main className="flex-1 min-w-0 h-full bg-base-white overflow-hidden">

          <Routes>

            <Route path="/" element={<Inicio />} />

            <Route path="/conteudos" element={<Conteudos />} />

            <Route path="/calendario" element={<Calendario />} />

            <Route path="/tecnologias" element={<Tecnologias />} />

            <Route
              path="/metodos-estudo"
              element={<MetodosEstudo />}
            />

            <Route
              path="/classificacao"
              element={<Classificacao />}
            />

            <Route
              path="/configuracoes"
              element={<Configuracoes />}
            />

            <Route
              path="/perfil"
              element={<Perfil />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;