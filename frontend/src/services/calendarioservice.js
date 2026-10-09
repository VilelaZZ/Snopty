//Todo acesso a dados do calendário passa por aqui. hj tudo fica no 
//localStorage; quando o backend existir, troque só o corpo das funções e a tela continua igual               
const CHAVES = {
  acessos: "synopt:acessos",                // ["2026-07-01", ...] dias em que o usuário esteve online
  primeiroAcesso: "synopt:primeiroAcesso",  // "2026-06-01"
  eventos: "synopt:eventos",                // [{ id, data, titulo }]
  demo: "synopt:demo",                      // "1" enquanto os dados de exemplo estiverem ativos
};

const DATES_API_URL = "https://api.datesapi.net/today?format=2006-01-02";

//helpers das datas
export function paraISO(date) {
  const a = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${a}-${m}-${d}`;
}

export function deISO(iso) {
  const [a, m, d] = iso.split("-").map(Number);
  return new Date(a, m - 1, d);
}

export function somarDias(iso, n) {
  const d = deISO(iso);
  d.setDate(d.getDate() + n);
  return paraISO(d);
}

function diferencaEmDias(isoA, isoB) {
  return Math.round((deISO(isoA) - deISO(isoB)) / 86400000);
}

//localStorage

function ler(chave, padrao) {
  try {
    const valor = localStorage.getItem(chave);
    return valor === null ? padrao : JSON.parse(valor);
  } catch {
    return padrao;
  }
}

function gravar(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch {
  }
}

//hoje
export async function obterHoje() {
  const local = paraISO(new Date());
  try {
    const controle = new AbortController();
    const limite = setTimeout(() => controle.abort(), 2500);
    const resposta = await fetch(DATES_API_URL, { signal: controle.signal });
    clearTimeout(limite);
    if (!resposta.ok) throw new Error("DatesAPI indisponível");

    const texto = await resposta.text();
    const achado = texto.match(/\d{4}-\d{2}-\d{2}/);
    if (!achado) return local;

    const daApi = achado[0];
    return Math.abs(diferencaEmDias(daApi, local)) > 1 ? daApi : local;
  } catch {
    return local;
  }
}


//presença
export function registrarAcesso(hoje) {
  const acessos = ler(CHAVES.acessos, []);
  if (!acessos.includes(hoje)) {
    acessos.push(hoje);
    gravar(CHAVES.acessos, acessos);
  }
  if (!ler(CHAVES.primeiroAcesso, null)) {
    gravar(CHAVES.primeiroAcesso, hoje);
  }
}

export function getDiasOnline() {
  return ler(CHAVES.acessos, []);
}

export function getPrimeiroAcesso() {
  return ler(CHAVES.primeiroAcesso, null);
}


//eventos
export function getEventos() {
  return ler(CHAVES.eventos, []);
}

export function adicionarEvento({ data, titulo }) {
  const eventos = getEventos();
  const novo = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, data, titulo };
  gravar(CHAVES.eventos, [...eventos, novo]);
  return novo;
}

export function atualizarEvento(id, titulo) {
  gravar(
    CHAVES.eventos,
    getEventos().map((e) => (e.id === id ? { ...e, titulo } : e))
  );
}

export function removerEvento(id) {
  gravar(
    CHAVES.eventos,
    getEventos().filter((e) => e.id !== id)
  );
}

// Na primeira abertura (storage vazio) cria ~40 dias de histórico de exemplo
// mas isso é só pra não aparecer vazio
export function prepararDadosIniciais(hoje) {
  if (ler(CHAVES.acessos, null) !== null) return;

  const acessos = [];
  for (let i = 1; i <= 40; i++) {
    const faltou = i % 7 === 2 || i % 6 === 0;
    if (!faltou) acessos.push(somarDias(hoje, -i));
  }
  gravar(CHAVES.acessos, acessos);
  gravar(CHAVES.primeiroAcesso, somarDias(hoje, -40));

  gravar(CHAVES.eventos, [
    { id: "demo-1", data: somarDias(hoje, -3), titulo: "Entregar projeto de Blender" },
    { id: "demo-2", data: somarDias(hoje, 2), titulo: "Estudar inglês nível 3" },
    { id: "demo-3", data: somarDias(hoje, 7), titulo: "Fazer a última prova do curso de design" },
  ]);

  gravar(CHAVES.demo, "1");
}

export function usandoDadosDemo() {
  return ler(CHAVES.demo, null) === "1";
}

// Apaga o histórico e os eventos de exemplo e recomeça a contar de hoje.
export function limparDadosDemo(hoje) {
  gravar(CHAVES.acessos, []);
  gravar(CHAVES.eventos, []);
  gravar(CHAVES.primeiroAcesso, hoje);
  try {
    localStorage.removeItem(CHAVES.demo);
  } catch {

  }
  registrarAcesso(hoje);
}