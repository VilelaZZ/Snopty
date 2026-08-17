import { useState } from "react";

import {
  House,
  LayoutDashboard,
  Calendar,
  Settings,
  Timeline,
  BookOpen,
  Bot,
  Search,
  Star,
  Heart,
  Bookmark,
  CircleHelp,
} from "lucide-react";

function App() {
  const [salvos, setSalvos] = useState([]); //guardar cursos que foram salvos
  const alternarSalvo = (curso) => {  // add ou remover o curso
    setSalvos((atual) =>
      atual.includes(curso)
        ? atual.filter((item) => item !== curso)
        : [...atual, curso]
    );
  };

  return (
    <div className="h-screen w-full flex flex-row">

    {/* Menu lateral */}
    <div className="bg-base-white w-1/4 flex flex-col px-8">

      {/* Logo */}
      <div className="flex-1 flex justify-center items-center">
        <img src="" alt="" />

        <p className="font-poppins font-semibold">
          Synopt
        </p>
      </div>

      <div className="w-full flex-[3] flex flex-col gap-2">

        {/* Início */}
        <div className="w-full">
          <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
            <House />
            <p className="font-bold">Início</p>
          </div>
        </div>

        {/* Conteúdos - ATIVO */}
        <div className="w-full">
          <div className="bg-primary-blue text-base-white py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center cursor-pointer">
            <LayoutDashboard />
            <p className="font-bold">Conteúdos</p>
          </div>
        </div>

        {/* Calendário */}
        <div className="w-full">
          <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
            <Calendar />
            <p className="font-bold">Calendário</p>
          </div>
        </div>

        {/* IA & Tecnologias */}
        <div className="w-full">
          <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
            <Bot className="stroke-technology-purple drop-shadow-[0_0_3.1px_#8B5CF6]" />
            <p className="font-bold">IA & Tecnologias</p>
          </div>
        </div>

        {/* Métodos de estudos */}
        <div className="w-full">
          <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
            <BookOpen />
            <p className="font-bold">Métodos de estudos</p>
          </div>
        </div>

        {/* Classificação */}
        <div className="w-full">
          <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
            <Timeline />
            <p className="font-bold">Classificação</p>
          </div>
        </div>

        {/* Configurações */}
        <div className="w-full">
          <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
            <Settings />
            <p className="font-bold">Configurações</p>
          </div>
        </div>
      </div>

      
      {/* Perfil */}
      <div className="flex-1">
        perfil
      </div>
    </div>


      {/* Conteúdos */}

      <div className="w-3/4 bg-base-white overflow-hidden">

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

      </div>

    </div>
  );
}


{/*componentes curso*/}

function Curso({
  titulo,
  categoria,
  duracao,
  avaliacao,
  imagem,
  salvo,
  onSalvar,
}) {

  return (

    <div className="min-w-[280px] w-[330px] hover:scale-101 transition bg-[#1f2937] text-white rounded-basic shadow-md overflow-hidden flex-shrink-0">


      {/* Imagem */}

      <div className="relative h-[150px]">

        <img
          src={imagem}
          alt={titulo}
          className="w-full h-full object-cover"
        />


        {/* salvar */}
        <button
          onClick={onSalvar}
          className="absolute top-3 right-3 bg-white rounded-md p-1.5 shadow hover:scale-105 transition"
        >

          <Bookmark
            size={19}
            className={
              salvo
                ? "text-primary-blue"
                : "text-gray-400"
            }
            fill={salvo ? "currentColor" : "none"}
          />

        </button>

      </div>


      {/* Informações curso */}

      <div className="p-4">

        <h3 className="font-bold text-sm">
          {titulo}
        </h3>

        <p className="text-xs text-white mt-1">
          {categoria} • Intermediário
        </p>

        <p className="text-xs text-gray-400 mt-3">
          Aprenda os principais conceitos e desenvolva novas
          habilidades através deste curso.
        </p>

        <p className="text-[10px] text-gray-400 mt-3">
          Duração do curso: {duracao}
        </p>


        {/* Estrelas */}

        <div className="mt-3">
          <div className="inline-flex gap-1 border bg-[#EF4444] border-[#EF4444] rounded-md px-2 py-1">

            {[1, 2, 3, 4, 5].map((estrela) => (

              <Star
                key={estrela}
                size={14}

                className={
                  estrela <= avaliacao
                    ? "text-[#f59e0b]"
                    : "text-gray-300"
                }
                fill={
                  estrela <= avaliacao
                    ? "currentColor"
                    : "none"
                }
              />

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}


export default App;