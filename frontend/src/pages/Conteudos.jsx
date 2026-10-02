import { useEffect, useState } from "react";

import {
  Search,
  Star,
  Heart,
  CircleHelp,
} from "lucide-react";

import Curso from "../components/Curso";
import ModalCurso from "../components/ModalCurso";

import { listarCursos } from "../services/cursos.jsx";

function Conteudos() {

  const [cursos, setCursos] = useState([]);
  const [salvos, setSalvos] = useState([]);
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  // Buscar cursos do backend
  useEffect(() => {
    async function carregarCursos() {
      try {
        const dados = await listarCursos();
        setCursos(dados);
      } catch (erro) {
        console.error("Erro ao carregar cursos:", erro);
      }
    }

    carregarCursos();
  }, []);

  // Adicionar ou remover curso dos salvos
  const alternarSalvo = (curso) => {
    setSalvos((atual) =>
      atual.includes(curso)
        ? atual.filter((item) => item !== curso)
        : [...atual, curso]
    );
  };

  return (
    <div className="h-full overflow-y-auto px-10 py-7">

      {/* Cabeçalho */}

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

        <div className="w-[330px] h-[48px] border border-[#4f7cff] rounded-lg flex items-center px-4 gap-3">

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

      <div className="mt-7 w-full bg-[#4f7cff] rounded-lg px-5 py-3 flex items-center justify-between text-white">

        <div className="flex items-center gap-3">

          <div className="bg-white text-[#4f7cff] rounded-full p-1">
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

          <button className="border border-white rounded-lg px-5 py-2 text-[10px] hover:bg-white hover:text-[#4f7cff] transition">
            Quero fazer!
          </button>

          <button className="bg-white text-[#4f7cff] border border-white rounded-lg px-5 py-2 text-[10px] hover:bg-[#4f7cff] hover:text-white transition">
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

          {cursos.map((curso) => (
            <Curso
              key={curso.id}
              titulo={curso.nome}
              descricao={curso.descricao}
              tecnologia={curso.tecnologia}
              duracao="—"
              avaliacao={5}
              imagem="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600"
              salvo={salvos.includes(curso.id)}
              onSalvar={() => alternarSalvo(curso.id)}
              onAbrir={() => setCursoSelecionado(curso)}
              url={curso.url}
            />
          ))}

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

          {cursos.map((curso) => (
            <Curso
              key={curso.id}
              titulo={curso.nome}
              descricao={curso.descricao}
              tecnologia={curso.tecnologia}
              duracao="—"
              avaliacao={5}
              imagem="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600"
              salvo={salvos.includes(curso.id)}
              onSalvar={() => alternarSalvo(curso.id)}
              onAbrir={() => setCursoSelecionado(curso)}
              url={curso.url}
            />
          ))}

        </div>

      </section>

      {/* Modal */}

      {cursoSelecionado && (
        <ModalCurso
          titulo={cursoSelecionado.nome}
          categoria={cursoSelecionado.plataforma}
          duracao="—"
          avaliacao={5}
          imagem="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600"
          onClose={() => setCursoSelecionado(null)}
        />
      )}

    </div>
  );
}

export default Conteudos;