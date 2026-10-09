
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LogoSnopty from "../assets/LogoSnopty.png";

import { cadastrarUsuario } from "../services/auth.jsx";


function Cadastro() {

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);


  async function handleCadastro(event) {

    event.preventDefault();

    setErro("");


    /* =========================
       VALIDAÇÕES
    ========================= */

    if (nome.trim().length < 3) {

      setErro(
        "Digite um nome com pelo menos 3 caracteres."
      );

      return;
    }


    if (!email.includes("@")) {

      setErro(
        "Digite um e-mail válido."
      );

      return;
    }


    if (senha.length < 6) {

      setErro(
        "A senha deve ter pelo menos 6 caracteres."
      );

      return;
    }


    if (senha !== confirmarSenha) {

      setErro(
        "As senhas não coincidem."
      );

      return;
    }


    /* =========================
       CADASTRAR NO BACKEND
    ========================= */

    try {

      setCarregando(true);

      await cadastrarUsuario({
        username: nome.trim(),
        email: email.trim().toLowerCase(),
        senha: senha,
      });


      /* =========================
         VOLTAR PARA LOGIN
      ========================= */

      navigate("/login", {
        replace: true,
      });


    } catch (erro) {

      setErro(
        erro.message || "Erro ao realizar cadastro."
      );

    } finally {

      setCarregando(false);

    }

  }


  return (

    <div className="min-h-screen w-full bg-[#CBD6F8] flex items-center justify-center px-4">

      <div className="w-full max-w-[380px] bg-white rounded-[14px] shadow-[0_2px_3px_rgba(0,0,0,0.25)] px-8 py-5">

        {/* LOGO */}

        <div className="flex justify-center mb-4">

          <img
            src={LogoSnopty}
            alt="Snopty"
            className="w-[52px] h-[52px] rounded-full object-cover"
          />

        </div>


        {/* TÍTULO */}

        <h1 className="text-center text-[18px] leading-[24px] font-bold text-black mb-6">

          Boas-vindas ao
          <br />
          Snopty

        </h1>


        {/* FORMULÁRIO */}

        <form
          onSubmit={handleCadastro}
          className="space-y-3"
        >

          {/* NOME */}

          <div>

            <label
              htmlFor="nome"
              className="block text-[9px] text-black mb-1"
            >
              Digite seu nome de usuário
            </label>

            <input
              id="nome"
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(event) =>
                setNome(event.target.value)
              }
              required
              className="
                w-full
                h-[29px]
                px-3
                rounded-[6px]
                bg-[#EEEEEE]
                border
                border-transparent
                outline-none
                text-[10px]
                text-black
                placeholder:text-black
                focus:bg-white
                focus:border-[#527CF5]
                transition
              "
            />

          </div>


          {/* E-MAIL */}

          <div>

            <label
              htmlFor="email"
              className="block text-[9px] text-black mb-1"
            >
              Digite seu E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
              className="
                w-full
                h-[29px]
                px-3
                rounded-[6px]
                bg-[#EEEEEE]
                border
                border-transparent
                outline-none
                text-[10px]
                text-black
                placeholder:text-black
                focus:bg-white
                focus:border-[#527CF5]
                transition
              "
            />

          </div>


          {/* SENHA */}

          <div>

            <label
              htmlFor="senha"
              className="block text-[9px] text-black mb-1"
            >
              Digite sua senha
            </label>

            <input
              id="senha"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(event) =>
                setSenha(event.target.value)
              }
              required
              className="
                w-full
                h-[29px]
                px-3
                rounded-[6px]
                bg-[#EEEEEE]
                border
                border-transparent
                outline-none
                text-[10px]
                text-black
                placeholder:text-black
                focus:bg-white
                focus:border-[#527CF5]
                transition
              "
            />

          </div>


          {/* CONFIRMAR SENHA */}

          <div>

            <label
              htmlFor="confirmarSenha"
              className="block text-[9px] text-black mb-1"
            >
              Confirmar senha
            </label>

            <input
              id="confirmarSenha"
              type="password"
              placeholder="Senha"
              value={confirmarSenha}
              onChange={(event) =>
                setConfirmarSenha(event.target.value)
              }
              required
              className="
                w-full
                h-[29px]
                px-3
                rounded-[6px]
                bg-[#EEEEEE]
                border
                border-transparent
                outline-none
                text-[10px]
                text-black
                placeholder:text-black
                focus:bg-white
                focus:border-[#527CF5]
                transition
              "
            />

          </div>


          {/* ERRO */}

          {erro && (

            <div className="rounded-md bg-red-50 border border-red-200 px-3 py-2">

              <p className="text-[9px] text-red-500">
                {erro}
              </p>

            </div>

          )}


          {/* VOLTAR PARA LOGIN */}

          <Link
            to="/login"
            className="block text-[9px] text-[#3569E8] hover:underline"
          >
            Já tem uma conta?
          </Link>


          {/* CADASTRAR */}

          <button
            type="submit"
            disabled={carregando}
            className="
              w-full
              h-[29px]
              bg-[#527CF5]
              hover:bg-[#416DE8]
              disabled:opacity-60
              disabled:cursor-not-allowed
              text-white
              text-[10px]
              font-bold
              rounded-[6px]
              transition
              shadow-sm
            "
          >
            {carregando ? "Cadastrando..." : "Cadastrar"}
          </button>

        </form>

      </div>

    </div>

  );
}

export default Cadastro;

