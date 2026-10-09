import { useNavigate } from "react-router-dom";
import {
  SquarePen,
  UserRoundPen,
  History,
  Paperclip,
  Trophy,
} from "lucide-react";

// Dados simulados do usuário, últimos acessos e ranking
// Dps a gente troca por dados reais vindos do backend
const usuario = {
  nome: "Marcos Gouveia",
  email: "marcosgouveia@gmail.com",
  fotoUrl: null,
  cursosSalvos: 15,
  cursosFinalizados: 6,
  horasEstudando: 247,
};

const ultimosAcessos = [
  { id: 1, titulo: "Fundamentos da programação", categoria: "Back-end", horas: 240 },
  { id: 2, titulo: "Inglês para conversação", categoria: "Linguagens", horas: 80 },
  { id: 3, titulo: "Como modelar em Blender", categoria: "Modelagem 3d", horas: 12 },
  { id: 4, titulo: "Design digital para iniciantes", categoria: "Design", horas: 30 },
  { id: 5, titulo: "Marketing digital", categoria: "Marketing", horas: 37 },
];

const ranking = [
  { posicao: 1, nome: "Marcia Oliveira", xp: 9976 },
  { posicao: 2, nome: "Sérgio Tenório", xp: 9367 },
  { posicao: 3, nome: "Arthur Cervero", xp: 9002 },
  { posicao: 4, nome: "Marcos Gouveia", xp: 8856, voce: true },
  { posicao: 5, nome: "Marcia Oliveira", xp: 8065 },
  { posicao: 6, nome: "Marcia Oliveira", xp: 7670 },
  { posicao: 7, nome: "Charlote Vivian", xp: 7654 },
];

// Componentes auxiliares
function Avatar({ fotoUrl, nome }) {
  if (fotoUrl) {
    return (
      <img
        src={fotoUrl}
        alt={`Foto de ${nome}`}
        className="h-[150px] w-[150px] shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-[150px] w-[150px] shrink-0 items-center justify-center rounded-full bg-[#4f7cff]">
      <UserRoundPen size={72} strokeWidth={1.75} className="text-black" />
    </div>
  );
}

function Estatistica({ titulo, valor }) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-lg font-semibold leading-tight text-black">{titulo}</p>
      <p className="mt-1 text-base font-medium text-gray-400">{valor}</p>
    </div>
  );
}

function BotaoAzul({ children, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md bg-[#4f7cff] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f7cff] ${className}`}
    >
      {children}
    </button>
  );
}

// Página de perfil
function Perfil() {
  const navigate = useNavigate();

  return (
    <div className="font-poppins flex h-full w-full flex-row gap-4 p-4">
      {/* coluna principal do perfil e o ranking */}
      <section className="relative flex min-h-0 flex-[3] flex-col overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md">
      {/* Botão de editar */}
        <button
          type="button"
          aria-label="Editar perfil"
          onClick={() => navigate("/configuracoes")}
          className="absolute right-3 top-3 text-gray-700 transition hover:text-[#4f7cff]"
        >
          <SquarePen size={18} />
        </button>

      {/* Cabeçalho do perfil */}
        <div className="flex flex-col gap-6 px-8 pb-6 pt-10">
          <div className="flex flex-row items-center gap-6 justify-center">
            <Avatar fotoUrl={usuario.fotoUrl} nome={usuario.nome} />

            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold text-black">{usuario.nome}</h1>
              <p className="text-base text-gray-400">{usuario.email}</p>
            </div>
          </div>

      {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <Estatistica
              titulo="Cursos salvos"
              valor={`${usuario.cursosSalvos} cursos`}
            />
            <Estatistica
              titulo="Cursos finalizados"
              valor={`${usuario.cursosFinalizados} cursos`}
            />
            <Estatistica
              titulo="Tempo estudando"
              valor={`${usuario.horasEstudando}H`}
            />
          </div>

      {/* Título da lista */}
          <div className="flex flex-row items-center gap-2">
            <History size={18} />
            <h2 className="text-base font-semibold text-black">Últimos acessos</h2>
          </div>
        </div>

    {/* lista ultimos acessos */}
        <ul className="min-h-0 flex-1 overflow-y-auto border-t border-gray-300">
          {ultimosAcessos.map((curso) => (
            <li
              key={curso.id}
              className="flex flex-row items-center justify-between gap-4 border-b border-gray-300 bg-gray-100 px-8 py-4 last:border-b-0"
            >
              <div className="flex flex-col">
                <p className="text-base font-semibold text-black">{curso.titulo}</p>
                <p className="text-xs text-gray-400">
                  {curso.categoria} | {curso.horas} horas de duração
                </p>
              </div>

              <BotaoAzul
                onClick={() => navigate(`/conteudos/${curso.id}`)}
                className="w-[130px] shrink-0"
              >
                Abrir curso
              </BotaoAzul>
            </li>
          ))}
        </ul>
      </section>

    {/*cluna lateral, cursos salvos e classificação*/}
      <aside className="flex min-h-0 flex-[1.2] flex-col gap-4">
    {/* Cursos salvos */}
        <div className="flex flex-col gap-4 rounded-xl border border-gray-300 bg-gray-100 px-4 py-4 shadow-md">
          <div className="flex flex-row items-center justify-center gap-2">
            <Paperclip size={16} />
            <h2 className="text-sm font-semibold text-black">Cursos salvos</h2>
          </div>

          <BotaoAzul onClick={() => navigate("/conteudos")} className="w-full">
            Acessar
          </BotaoAzul>
        </div>

    {/* Classificaçao */}
        <div className="flex min-h-0 flex-1 flex-col rounded-xl border border-gray-300 bg-white shadow-md overflow-hidden">
          <div className="flex flex-row items-center gap-2 px-4 pb-2 pt-4">
            <Trophy size={16} />
            <h2 className="text-sm font-semibold text-black">Classificação</h2>
          </div>

          <ol className="flex min-h-0 flex-1 flex-col overflow-y-auto">
            {ranking.map((item) => (
              <li
                key={item.posicao}
                className={`flex flex-1 flex-row items-center gap-2 px-4 py-3 ${
                  item.voce ? "bg-gray-200" : ""
                }`}
              >
                <span
                  className={`flex h-6 min-w-[28px] items-center justify-center rounded px-2 text-xs font-bold text-white ${
                    item.voce ? "bg-red-500" : "bg-amber-500"
                  }`}
                >
                  {item.posicao}
                </span>

                <span className="text-sm font-semibold text-black">{item.nome}</span>
                <span className="text-[11px] text-gray-500">{item.xp}xp</span>
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </div>
  );
}

export default Perfil;