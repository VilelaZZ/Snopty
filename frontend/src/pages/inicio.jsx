import {
  Search,
  Flame,
  Clock3,
  Paperclip,
} from "lucide-react";

import CursoHome from "../components/CursoHome";

function Inicio() {

  return (
    <div className="h-full overflow-y-auto px-10 py-7">

      {/* Cabeçalho */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="font-poppins font-bold text-xl">
            Bem vindo, Usuário!
          </h1>

          <p className="text-gray-400 text-sm">
            Pronto para aprender?
          </p>
        </div>

        {/* Barra de pesquisa */}

        <div className="w-[330px] h-[48px] border border-[#4f7cff] rounded-lg flex items-center px-4 gap-3">

          <Search
            size={20}
            className="text-black"
          />

          <input
            type="text"
            placeholder="Pesquisar"
            className="outline-none w-full font-poppins text-sm"
          />

        </div>

      </div>


      {/* Informações do usuário */}

      <div className="grid grid-cols-2 gap-3 mt-7">

        {/* Sequência */}

        <div className="border border-[#4f7cff] rounded-lg p-4 h-[115px]">

          <div className="flex items-start gap-3">

            <div className="bg-red-500 text-white rounded-lg p-2">
              <Flame size={20} />
            </div>

            <div>
              <p className="font-bold text-sm">
                12 dias
              </p>

              <p className="text-[10px] text-gray-400">
                em sequência
              </p>
            </div>

          </div>

          <p className="text-[9px] text-gray-400 text-center mt-3">
            Continue estudando para manter sua sequência!
          </p>

        </div>


        {/* Tempo de estudo */}

        <div className="border border-[#4f7cff] rounded-lg p-4 h-[115px]">

          <div className="flex items-start gap-3">

            <div className="bg-[#4f7cff] text-white rounded-lg p-2">
              <Clock3 size={20} />
            </div>

            <div>
              <p className="font-bold text-sm">
                1h 20m
              </p>

              <p className="text-[10px] text-gray-400">
                tempo de estudo
              </p>
            </div>

          </div>

          <p className="text-[9px] text-gray-400 text-center mt-3">
            Continue estudando para alcançar sua meta diária!
          </p>

        </div>

      </div>


      {/* Meus cursos */}

      <section className="mt-7">

        <div className="flex items-center gap-3 mb-4">

          <div className="bg-[#4f7cff] text-white rounded-lg p-2">
            <Paperclip size={18} />
          </div>

          <div>
            <h2 className="font-bold">
              Meus cursos
            </h2>

            <p className="text-[10px] text-gray-400">
              Comece de onde parou!
            </p>
          </div>

        </div>


        {/* Grid de cursos */}

        <div className="grid grid-cols-2 gap-5">

          <CursoHome
            titulo="Game AI Development"
            categoria="Game Dev"
            nivel="Avançado"
            descricao="Aprenda conceitos de inteligência artificial aplicados ao desenvolvimento de jogos."
            imagem="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600"
            progresso={65}
          />

          <CursoHome
            titulo="UX/UI Design para Mobile"
            categoria="Design"
            nivel="Intermediário"
            descricao="Aprenda os fundamentos para criar interfaces e experiências para dispositivos móveis."
            imagem="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600"
            progresso={40}
          />

          <CursoHome
            titulo="Desenvolvimento com Node.js"
            categoria="Back-end"
            nivel="Avançado"
            descricao="Aprenda a desenvolver aplicações utilizando Node.js e suas principais ferramentas."
            imagem="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600"
            progresso={75}
          />

          <CursoHome
            titulo="SQL: Análise e manipulação de dados"
            categoria="Banco de dados"
            nivel="Intermediário"
            descricao="Aprenda a consultar, analisar e manipular dados utilizando SQL."
            imagem="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600"
            progresso={25}
          />

        </div>

      </section>

    </div>
  );
}

export default Inicio;