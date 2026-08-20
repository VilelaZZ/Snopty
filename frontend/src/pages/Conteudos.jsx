import { useState } from "react";

import {
  Search,
  Star,
  Heart,
  CircleHelp,
} from "lucide-react";

import Curso from "../components/Curso";

function Conteudos() {

  const [salvos, setSalvos] = useState([]); //guardar cursos que foram salvos

  const alternarSalvo = (curso) => {  // add ou remover o curso
    setSalvos((atual) =>
      atual.includes(curso)
        ? atual.filter((item) => item !== curso)
        : [...atual, curso]
    );
  };

  return (
    <div className="h-full overflow-y-auto px-10 py-7">

      {/* Cabeçallho */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="font-poppins font-bold text-2xl">
            Conteúdos
          </h1>

          <p className="text-gray-400 text-sm">
            Descubra novos aprendizados
          </p>
        </div>

        {/* Barra de pesquisa */}

        <div className="w-[330px] h-[48px] border border-primary-blue rounded-basic flex items-center px-4 gap-3">

          <Search
            size={20}
            className="text-black"
          />

          <input
            type="text"
            placeholder="Pesquisar Cursos"
            className="outline-none w-full font-poppins text-sm"
          />

        </div>

      </div>

      {/* Questionário */}

      <div className="mt-7 w-full bg-primary-blue rounded-basic px-5 py-3 flex items-center justify-between text-white">

        <div className="flex items-center gap-3">

          <div className="bg-white text-primary-blue rounded-full p-1">
            <CircleHelp size={18} />
          </div>

          <div>
            <p className="text-sm font-bold">
              Ainda não fez a pesquisa de usuário?
            </p>

            <p className="text-[10px]">
              Com isso podemos melhorar suas recomendações.
            </p>
          </div>

        </div>

        <div className="flex gap-3">

          <button className="border border-white rounded-lg px-5 py-2 text-[10px] hover:bg-white hover:text-primary-blue transition">
            Quero fazer!
          </button>

          <button className="bg-white text-primary-blue rounded-lg px-5 py-2 text-[10px] hover:bg-gray-300 transition">
            Talvez mais tarde
          </button>

        </div>

      </div>

      {/* Cursos populares */}

      <section className="mt-7">

        <div className="flex items-center gap-3 mb-4">

          <div className="bg-[#f59e0b] text-white rounded-lg p-2">
            <Star size={18} fill="white" />
          </div>

          <h2 className="font-bold">
            Populares
          </h2>

        </div>

        {/* Lista horizontal de cursos */}

        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-thin">

          <Curso
            titulo="Tudo sobre Python"
            categoria="Back-end"
            duracao="200h"
            avaliacao={5}
            imagem="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600"
            salvo={salvos.includes("python")}
            onSalvar={() => alternarSalvo("python")}
          />

          <Curso
            titulo="Inglês para conversação"
            categoria="Idiomas"
            duracao="100h"
            avaliacao={4}
            imagem="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600"
            salvo={salvos.includes("ingles")}
            onSalvar={() => alternarSalvo("ingles")}
          />

          <Curso
            titulo="Cálculo 1"
            categoria="Matemática"
            duracao="80h"
            avaliacao={3}
            imagem="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600"
            salvo={salvos.includes("calculo")}
            onSalvar={() => alternarSalvo("calculo")}
          />

          <Curso
            titulo="JavaScript"
            categoria="Programação"
            duracao="120h"
            avaliacao={5}
            imagem="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600"
            salvo={salvos.includes("javascript")}
            onSalvar={() => alternarSalvo("javascript")}
          />

        </div>

      </section>

      {/* Recomendados */}

      <section className="mt-7">

        <div className="flex items-center gap-3 mb-4">

          <div className="bg-red-500 text-white rounded-lg p-2">
            <Heart size={18} fill="white" />
          </div>

          <h2 className="font-bold">
            Recomendados
          </h2>

        </div>

        <div className="flex gap-5 overflow-x-auto pb-4">

          <Curso
            titulo="Level Design"
            categoria="Game Design"
            duracao="50h"
            avaliacao={4}
            imagem="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600"
            salvo={salvos.includes("level")}
            onSalvar={() => alternarSalvo("level")}
          />

          <Curso
            titulo="Fundamentos do Marketing Digital"
            categoria="Marketing"
            duracao="25h"
            avaliacao={5}
            imagem="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
            salvo={salvos.includes("marketing")}
            onSalvar={() => alternarSalvo("marketing")}
          />

          <Curso
            titulo="Introdução ao Design"
            categoria="Design"
            duracao="30h"
            avaliacao={4}
            imagem="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600"
            salvo={salvos.includes("design")}
            onSalvar={() => alternarSalvo("design")}
          />

        </div>

      </section>

    </div>
  );
}

export default Conteudos;