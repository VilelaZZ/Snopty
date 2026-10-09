
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LogoSnopty from "../assets/LogoSnopty.png";
import { fazerLogin } from "../services/auth.jsx";


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);


  async function handleLogin(event) {

    event.preventDefault();

    setErro("");
    setCarregando(true);


    try {

      const resultado = await fazerLogin({
        email: email.trim().toLowerCase(),
        senha: senha,
      });


      /* =========================
         LOGIN REALIZADO
      ========================= */

      localStorage.setItem(
        "snoptyLogado",
        "true"
      );


      localStorage.setItem(
        "snoptyUsuarioAtual",
        JSON.stringify({
          nome: resultado.usuario,
          email: email.trim().toLowerCase(),
        })
      );


      /* =========================
         VAI PARA O INÍCIO
      ========================= */

      navigate("/inicio", {
        replace: true,
      });


    } catch (erro) {

      setErro(
        erro.message ||
        "E-mail ou senha incorretos."
      );


    } finally {

      setCarregando(false);

    }
  }


  return (

    <div className="min-h-screen w-full bg-[#CBD6F8] flex items-center justify-center px-4">

      <div className="w-full max-w-[380px] bg-white rounded-[14px] shadow-[0_2px_3px_rgba(0,0,0,0.25)] px-8 py-6">


        {/* LOGO */}

        <div className="flex justify-center mb-5">

          <img
            src={LogoSnopty}
            alt="Snopty"
            className="w-[52px] h-[52px] rounded-full object-cover"
          />

        </div>


        {/* TÍTULO */}

        <h1 className="text-center text-[18px] leading-[24px] font-bold text-black mb-7">

          Bem-vindo(a)

          <br />

          de volta!

        </h1>


        {/* FORMULÁRIO */}

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >


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
              autoComplete="email"
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
              autoComplete="current-password"
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


          {/* ESQUECI SENHA */}

          <button
            type="button"
            className="text-[9px] text-black hover:underline"
          >
            Esqueci minha senha
          </button>


          {/* ENTRAR */}

          <button
            type="submit"
            disabled={carregando}
            className="
              w-full
              h-[29px]
              bg-[#527CF5]
              hover:bg-[#416DE8]
              text-white
              text-[10px]
              font-bold
              rounded-[6px]
              transition
              shadow-sm
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>

        </form>


        {/* CADASTRO */}

        <div className="text-center mt-5">

          <span className="text-[9px] text-black">
            Ainda não possui uma conta?{" "}
          </span>

          <Link
            to="/cadastro"
            className="text-[9px] text-[#3569E8] hover:underline"
          >
            Cadastre-se
          </Link>

        </div>

      </div>

    </div>

  );
}


export default Login;
