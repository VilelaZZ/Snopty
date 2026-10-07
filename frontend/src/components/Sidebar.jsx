import { NavLink } from "react-router-dom";

import {
  House,
  LayoutDashboard,
  Calendar,
  Settings,
  Timeline,
  BookOpen,
  Bot,
  UserRound,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="w-1/4 flex-none h-full flex flex-col gap-2 px-3">

      {/* Logo */}
      <div className="flex-1 flex flex-col justify-center items-center mt-3">

        <img
          className="rounded-full"
          src="./src/assets/LogoSnopty.png"
          alt="LogoSite"
          width={70}
          height={70}
        />

        <p className="font-poppins font-semibold mb-1">
          Synopt
        </p>

      </div>

      {/* Início */}
      <div className="w-full">
        <NavLink to="/" className="block">
          {({ isActive }) => (
            <div
              className={`py-[18px] px-[16px] w-full rounded-lg flex flex-row gap-[15px] items-center border-2 transition-all cursor-pointer
                ${
                  isActive
                    ? "bg-[#4f7cff] text-white"
                    : "bg-base-white text-black border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)]"
                }`}
            >
              <House />
              <p className="font-bold">Início</p>
            </div>
          )}
        </NavLink>
      </div>

      {/* Conteúdos */}
      <div className="w-full">
        <NavLink to="/conteudos" className="block">
          {({ isActive }) => (
            <div
              className={`py-[18px] px-[16px] w-full rounded-lg flex flex-row gap-[15px] items-center border-2 transition-all cursor-pointer
                ${
                  isActive
                    ? "bg-[#4f7cff] text-white"
                    : "bg-base-white text-black border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)]"
                }`}
            >
              <LayoutDashboard />
              <p className="font-bold">Conteúdos</p>
            </div>
          )}
        </NavLink>
      </div>

      {/* Calendário */}
      <div className="w-full">
        <NavLink to="/calendario" className="block">
          {({ isActive }) => (
            <div
              className={`py-[18px] px-[16px] w-full rounded-lg flex flex-row gap-[15px] items-center border-2 transition-all cursor-pointer
                ${
                  isActive
                    ? "bg-[#4f7cff] text-white"
                    : "bg-base-white text-black border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)]"
                }`}
            >
              <Calendar />
              <p className="font-bold">Calendário</p>
            </div>
          )}
        </NavLink>
      </div>

      {/* IA & Tecnologias */}
      <div className="w-full">
        <NavLink to="/tecnologias" className="block">
          {({ isActive }) => (
            <div
              className={`py-[18px] px-[16px] w-full rounded-lg flex flex-row gap-[15px] items-center border-2 transition-all cursor-pointer
                ${
                  isActive
                    ? "bg-[#4f7cff] text-white"
                    : "bg-base-white text-black border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)]"
                }`}
            >
              <Bot
                className={
                  isActive
                    ? "stroke-white"
                    : "stroke-technology-purple drop-shadow-[0_0_3.1px_#8B5CF6]"
                }
              />
              <p className="font-bold">IA & Tecnologias</p>
            </div>
          )}
        </NavLink>
      </div>

      {/* Métodos de estudos */}
      <div className="w-full">
        <NavLink to="/metodos-estudo" className="block">
          {({ isActive }) => (
            <div
              className={`py-[18px] px-[16px] w-full rounded-lg flex flex-row gap-[15px] items-center border-2 transition-all cursor-pointer
                ${
                  isActive
                    ? "bg-[#4f7cff] text-white"
                    : "bg-base-white text-black border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)]"
                }`}
            >
              <BookOpen />
              <p className="font-bold">Métodos de estudos</p>
            </div>
          )}
        </NavLink>
      </div>

      {/* Classificação */}
      <div className="w-full">
        <NavLink to="/classificacao" className="block">
          {({ isActive }) => (
            <div
              className={`py-[18px] px-[16px] w-full rounded-lg flex flex-row gap-[15px] items-center border-2 transition-all cursor-pointer
                ${
                  isActive
                    ? "bg-[#4f7cff] text-white"
                    : "bg-base-white text-black border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)]"
                }`}
            >
              <Timeline />
              <p className="font-bold">Classificação</p>
            </div>
          )}
        </NavLink>
      </div>

      {/* Configurações */}
      <div className="w-full">
        <NavLink to="/configuracoes" className="block">
          {({ isActive }) => (
            <div
              className={`py-[18px] px-[16px] w-full rounded-lg flex flex-row gap-[15px] items-center border-2 transition-all cursor-pointer
                ${
                  isActive
                    ? "bg-[#4f7cff] text-white"
                    : "bg-base-white text-black border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)]"
                }`}
            >
              <Settings />
              <p className="font-bold">Configurações</p>
            </div>
          )}
        </NavLink>
      </div>

      {/* Perfil */}
      <div className="w-full">
        <NavLink to="/perfil" className="block">
          {({ isActive }) => (
            <div
              className={`py-[7px] px-[16px] w-full rounded-lg flex flex-row gap-[15px] items-center border-2 transition-all cursor-pointer
                ${
                  isActive
                    ? "bg-[#4f7cff] text-white"
                    : "bg-base-white text-black border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)]"
                }`}
            >
              <UserRound />
              <p className="font-bold">Perfil</p>
              <p>user01</p>
            </div>
          )}
        </NavLink>
      </div>

    </div>
  );
}

export default Sidebar;