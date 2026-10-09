
import API_URL from "./api.jsx";


export async function cadastrarUsuario(dados) {

  const resposta = await fetch(
    `${API_URL}/cadastro/`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(dados),
    }
  );


  const resultado = await resposta.json();


  if (!resposta.ok) {

    throw new Error(
      resultado.username?.[0] ||
      resultado.email?.[0] ||
      resultado.senha?.[0] ||
      "Erro ao realizar cadastro."
    );

  }


  return resultado;
}


export async function fazerLogin(dados) {

  const resposta = await fetch(
    `${API_URL}/login/`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(dados),
    }
  );


  const resultado = await resposta.json();


  if (!resposta.ok) {

    throw new Error(
      resultado.non_field_errors?.[0] ||
      "Usuário ou senha inválidos."
    );

  }


  return resultado;
}

