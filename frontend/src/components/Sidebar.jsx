import { Link } from "react-router-dom";

import {
  House,
  LayoutDashboard,
  Calendar,
  Settings,
  Timeline,
  BookOpen,
  Bot,
} from "lucide-react";

function Sidebar() {
  return (
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
          <Link to="/" className="block">
            <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
              <House />
              <p className="font-bold">Início</p>
            </div>
          </Link>
        </div>

        {/* Conteúdos */}
        <div className="w-full">
          <Link to="/conteudos" className="block">
            <div className="bg-primary-blue text-base-white py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center cursor-pointer">
              <LayoutDashboard />
              <p className="font-bold">Conteúdos</p>
            </div>
          </Link>
        </div>

        {/* Calendário */}
        <div className="w-full">
          <Link to="/calendario" className="block">
            <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
              <Calendar />
              <p className="font-bold">Calendário</p>
            </div>
          </Link>
        </div>

        {/* IA & Tecnologias */}
        <div className="w-full">
          <Link to="/tecnologias" className="block">
            <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
              <Bot className="stroke-technology-purple drop-shadow-[0_0_3.1px_#8B5CF6]" />
              <p className="font-bold">IA & Tecnologias</p>
            </div>
          </Link>
        </div>

        {/* Métodos de estudos */}
        <div className="w-full">
          <Link to="/metodos-estudo" className="block">
            <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
              <BookOpen />
              <p className="font-bold">Métodos de estudos</p>
            </div>
          </Link>
        </div>

        {/* Classificação */}
        <div className="w-full">
          <Link to="/classificacao" className="block">
            <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
              <Timeline />
              <p className="font-bold">Classificação</p>
            </div>
          </Link>
        </div>

        {/* Configurações */}
        <div className="w-full">
          <Link to="/configuracoes" className="block">
            <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
              <Settings />
              <p className="font-bold">Configurações</p>
            </div>
          </Link>
        </div>

      </div>

      {/* Perfil */}
      <div className="flex-1">
        perfil
      </div>

    </div>
  );
}

export default Sidebar;