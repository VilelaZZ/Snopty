import { useEffect, useMemo, useState } from "react";
import { Pencil, Trash2, Check, X, Plus } from "lucide-react";

import {
  obterHoje,
  paraISO,
  deISO,
  prepararDadosIniciais,
  registrarAcesso,
  getDiasOnline,
  getPrimeiroAcesso,
  getEventos,
  adicionarEvento,
  atualizarEvento,
  removerEvento,
  usandoDadosDemo,
  limparDadosDemo,
} from "../services/calendarioservice";

const MESES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];
const DIAS_SEMANA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const COR = {
  online: "bg-[#4fd1a5]",
  offline: "bg-[#f04545]",
  evento: "bg-[#d4b020]",
};

function formatarDataLonga(iso) {
  const d = deISO(iso);
  return `${d.getDate()} de ${MESES[d.getMonth()].toLowerCase()} de ${d.getFullYear()}`;
}

function Calendario() {
  const [pronto, setPronto] = useState(false);
  const [hoje, setHoje] = useState(paraISO(new Date()));
  const [mes, setMes] = useState(new Date().getMonth());
  const [ano, setAno] = useState(new Date().getFullYear());

  const [diasOnline, setDiasOnline] = useState(new Set());
  const [primeiroAcesso, setPrimeiroAcesso] = useState(null);
  const [eventos, setEventos] = useState([]);
  const [demo, setDemo] = useState(false);

  const [diaSelecionado, setDiaSelecionado] = useState(null);
  const [novoTitulo, setNovoTitulo] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [tituloEditado, setTituloEditado] = useState("");

//carga inicial
  useEffect(() => {
    let ativo = true;

    async function iniciar() {
      const dataHoje = await obterHoje();
      if (!ativo) return;

      prepararDadosIniciais(dataHoje);
      registrarAcesso(dataHoje);

      const d = deISO(dataHoje);
      setHoje(dataHoje);
      setMes(d.getMonth());
      setAno(d.getFullYear());
      setDiaSelecionado(dataHoje);
      recarregar();
      setPronto(true);
    }

    iniciar();
    return () => {
      ativo = false;
    };
  }, []);

  function recarregar() {
    setDiasOnline(new Set(getDiasOnline()));
    setPrimeiroAcesso(getPrimeiroAcesso());
    setEventos(getEventos());
    setDemo(usandoDadosDemo());
  }

//grade 6x7
  const celulas = useMemo(() => {
    const inicioSemana = new Date(ano, mes, 1).getDay();
    return Array.from({ length: 42 }, (_, i) => {
      const d = new Date(ano, mes, 1 - inicioSemana + i);
      return { iso: paraISO(d), dia: d.getDate(), doMes: d.getMonth() === mes };
    });
  }, [ano, mes]);

//online/offline
  function statusDoDia(iso) {
    if (iso > hoje) return null;
    if (primeiroAcesso && iso < primeiroAcesso) return null;
    return diasOnline.has(iso) ? "online" : "offline";
  }

  const eventosPorDia = useMemo(() => {
    const mapa = {};
    eventos.forEach((e) => {
      (mapa[e.data] ||= []).push(e);
    });
    return mapa;
  }, [eventos]);

//porcentagens
  const { diasVerdes, diasVermelhos, pctOnline, pctOffline } = useMemo(() => {
    let verdes = 0;
    let vermelhos = 0;
    celulas.forEach((c) => {
      if (!c.doMes) return;
      const s = statusDoDia(c.iso);
      if (s === "online") verdes++;
      if (s === "offline") vermelhos++;
    });
    const total = verdes + vermelhos;
    const online = total ? Math.round((verdes / total) * 100) : 0;
    return {
      diasVerdes: verdes,
      diasVermelhos: vermelhos,
      pctOnline: online,
      pctOffline: total ? 100 - online : 0,
    };

  }, [celulas, diasOnline, primeiroAcesso, hoje]);

//eventos
  const eventosDoDia = diaSelecionado ? eventosPorDia[diaSelecionado] || [] : [];

  function aoAdicionar(e) {
    e.preventDefault();
    const titulo = novoTitulo.trim();
    if (!titulo || !diaSelecionado) return;
    adicionarEvento({ data: diaSelecionado, titulo });
    setNovoTitulo("");
    setEventos(getEventos());
  }

  function aoSalvarEdicao(id) {
    const titulo = tituloEditado.trim();
    if (titulo) atualizarEvento(id, titulo);
    setEditandoId(null);
    setEventos(getEventos());
  }

  function aoRemover(id) {
    removerEvento(id);
    setEventos(getEventos());
  }

  function selecionarDia(celula) {
    setDiaSelecionado(celula.iso);
    setEditandoId(null);
    if (!celula.doMes) {
      const d = deISO(celula.iso);
      setMes(d.getMonth());
      setAno(d.getFullYear());
    }
  }

  function aoLimparDemo() {
    limparDadosDemo(hoje);
    recarregar();
  }

//render
  if (!pronto) {
    return (
      <div className="font-poppins flex h-full w-full items-center justify-center text-gray-500">
        Carregando calendário...
      </div>
    );
  }

  const anosDisponiveis = Array.from({ length: 11 }, (_, i) => deISO(hoje).getFullYear() - 5 + i);

  return (
    <div className="font-poppins flex h-full w-full flex-col items-center overflow-y-auto px-6 py-8">
    {/* Título */}
      <h1 className="text-2xl font-semibold text-black">Calendário</h1>
      <p className="mt-1 text-sm text-gray-700">Veja os dias que aprendeu algo novo</p>

      <div className="mt-10 flex w-full max-w-4xl flex-col gap-6">
    {/* Seletores de mês e ano */}
        <div className="flex flex-row items-center justify-between">
          <select
            aria-label="Mês"
            value={mes}
            onChange={(e) => setMes(Number(e.target.value))}
            className="w-40 rounded-md border border-black bg-white px-3 py-2 text-sm"
          >
            {MESES.map((nome, i) => (
              <option key={nome} value={i}>
                {nome}
              </option>
            ))}
          </select>

          <select
            aria-label="Ano"
            value={ano}
            onChange={(e) => setAno(Number(e.target.value))}
            className="w-32 rounded-md border border-black bg-white px-3 py-2 text-sm"
          >
            {anosDisponiveis.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

    {/* Grade do calendário */}
        <div className="overflow-hidden rounded-3xl border border-black bg-white">
          <div className="grid grid-cols-7 border-b border-black">
            {DIAS_SEMANA.map((nome, i) => (
              <div
                key={nome}
                className={`py-3 text-center text-sm font-medium ${i < 6 ? "border-r border-black" : ""}`}
              >
                {nome}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {celulas.map((c, i) => {
              const status = statusDoDia(c.iso);
              const temEvento = Boolean(eventosPorDia[c.iso]?.length);
              const ehHoje = c.iso === hoje;
              const selecionado = c.iso === diaSelecionado;

              
              let corQuadrado = "";
              if (status) corQuadrado = COR[status];
              else if (temEvento) corQuadrado = COR.evento;

              return (
                <div
                  key={c.iso}
                  className={`flex h-16 items-center justify-center ${
                    i % 7 < 6 ? "border-r border-black" : ""
                  } ${selecionado ? "bg-gray-100" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => selecionarDia(c)}
                    aria-label={`${formatarDataLonga(c.iso)}${
                      status === "online" ? ", online" : status === "offline" ? ", offline" : ""
                    }${temEvento ? ", com evento" : ""}`}
                    className={`relative flex h-9 w-9 items-center justify-center rounded-md text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f7cff] ${corQuadrado} ${
                      corQuadrado ? "border border-black/10 shadow-sm font-medium text-black" : ""
                    } ${!corQuadrado && !c.doMes ? "text-gray-300" : "text-black"} ${
                      ehHoje ? "ring-2 ring-[#4f7cff] ring-offset-2" : ""
                    }`}
                  >
                    {c.dia}
                    {temEvento && status && (
                      <span
                        aria-hidden="true"
                        className={`absolute -right-1 -top-1 h-3 w-3 rounded-full border border-white ${COR.evento}`}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

    {/* Legenda e porcentagens */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
          <div className="flex flex-row items-center gap-2">
            <span className={`h-4 w-4 rounded ${COR.online}`} />
            <span>
              Online <strong>{pctOnline}%</strong>{" "}
              <span className="text-gray-500">({diasVerdes} dias)</span>
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className={`h-4 w-4 rounded ${COR.offline}`} />
            <span>
              Offline <strong>{pctOffline}%</strong>{" "}
              <span className="text-gray-500">({diasVermelhos} dias)</span>
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className={`h-4 w-4 rounded ${COR.evento}`} />
            <span>Evento</span>
          </div>
        </div>

   {/* Painel de eventos do dia selecionado */}
        {diaSelecionado && (
          <section className="rounded-xl border border-gray-300 bg-white p-5 shadow-md">
            <h2 className="text-base font-semibold text-black">
              Eventos de {formatarDataLonga(diaSelecionado)}
            </h2>

            {eventosDoDia.length === 0 ? (
              <p className="mt-3 text-sm text-gray-500">Nenhum evento neste dia.</p>
            ) : (
              <ul className="mt-3 flex flex-col gap-2">
                {eventosDoDia.map((ev) => (
                  <li
                    key={ev.id}
                    className="flex flex-row items-center justify-between gap-3 rounded-md bg-gray-100 px-3 py-2"
                  >
                    {editandoId === ev.id ? (
                      <input
                        autoFocus
                        value={tituloEditado}
                        maxLength={80}
                        onChange={(e) => setTituloEditado(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") aoSalvarEdicao(ev.id);
                          if (e.key === "Escape") setEditandoId(null);
                        }}
                        className="flex-1 rounded border border-gray-400 bg-white px-2 py-1 text-sm"
                      />
                    ) : (
                      <span className="flex-1 text-sm text-black">{ev.titulo}</span>
                    )}

                    <div className="flex flex-row items-center gap-2 text-gray-600">
                      {editandoId === ev.id ? (
                        <>
                          <button
                            type="button"
                            aria-label="Salvar alteração"
                            onClick={() => aoSalvarEdicao(ev.id)}
                            className="hover:text-[#4fd1a5]"
                          >
                            <Check size={18} />
                          </button>
                          <button
                            type="button"
                            aria-label="Cancelar edição"
                            onClick={() => setEditandoId(null)}
                            className="hover:text-black"
                          >
                            <X size={18} />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            aria-label={`Editar ${ev.titulo}`}
                            onClick={() => {
                              setEditandoId(ev.id);
                              setTituloEditado(ev.titulo);
                            }}
                            className="hover:text-[#4f7cff]"
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            type="button"
                            aria-label={`Excluir ${ev.titulo}`}
                            onClick={() => aoRemover(ev.id)}
                            className="hover:text-[#f04545]"
                          >
                            <Trash2 size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <form onSubmit={aoAdicionar} className="mt-4 flex flex-row gap-3">
              <input
                value={novoTitulo}
                maxLength={80}
                onChange={(e) => setNovoTitulo(e.target.value)}
                placeholder="Ex.: Estudar inglês nível 3"
                aria-label="Título do evento"
                className="flex-1 rounded-md border border-gray-400 px-3 py-2 text-sm"
              />
              <button
                type="submit"
                disabled={!novoTitulo.trim()}
                className="flex flex-row items-center gap-1 rounded-md bg-[#4f7cff] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Plus size={16} />
                Adicionar evento
              </button>
            </form>
          </section>
        )}

    {/* Aviso de dados de exemplo */}
        {demo && (
          <p className="text-center text-xs text-gray-500">
            Histórico e eventos de exemplo.{" "}
            <button
              type="button"
              onClick={aoLimparDemo}
              className="font-semibold text-[#4f7cff] underline"
            >
              Limpar dados de exemplo
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default Calendario;