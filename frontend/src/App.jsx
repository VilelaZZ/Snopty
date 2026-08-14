import {
  House,
  LayoutDashboard,
  Calendar,
  Users,
  Settings,
  Timeline,
  BookOpen,
  Bot,
} from "lucide-react";

function App() {
  return (
    <div className="h-screen w-full flex flex-row">
      <div className="bg-base-white w-1/4 h-screen flex flex-col px-8">

  {/* Logo */}
  <div className="flex-none h-32 flex justify-center items-center">
    <img src="" alt="" />
    <p className="font-poppins font-semibold">
      Synopt
    </p>
  </div>

  {/* Menu */}
  <div className="flex-1 min-h-0 w-full flex flex-col gap-2 overflow-y-auto">

    {/* Início */}
    <div className="w-full">
      <div className="bg-primary-blue text-base-white py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center cursor-pointer">
        <House />
        <p className="font-bold">Início</p>
      </div>
    </div>

    {/* Conteúdos */}
    <div className="w-full">
      <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
        <LayoutDashboard className="stroke-gray" />
        <p className="font-bold text-gray">Conteúdos</p>
      </div>
    </div>

    {/* Calendário */}
    <div className="w-full">
      <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
        <Calendar className="stroke-gray" />
        <p className="font-bold text-gray">Calendário</p>
      </div>
    </div>

    {/* IA & Tecnologias */}
    <div className="w-full">
      <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
        <Bot className="stroke-technology-purple drop-shadow-[0_0_3.1px_#8B5CF6]" />
        <p className="font-bold text-gray">IA & Tecnologias</p>
      </div>
    </div>

    {/* Métodos de estudos */}
    <div className="w-full">
      <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
        <BookOpen className="stroke-studies-green drop-shadow-[0_0_3.1px_#4FD1A5]" />
        <p className="font-bold text-gray">Métodos de estudos</p>
      </div>
    </div>

    {/* Classificação */}
    <div className="w-full">
      <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
        <Timeline className="stroke-gray" />
        <p className="font-bold text-gray">Classificação</p>
      </div>
    </div>

    {/* Configurações */}
    <div className="w-full">
      <div className="bg-base-white text-black py-[18px] px-[16px] w-full rounded-basic flex flex-row gap-[15px] items-center border-2 border-transparent hover:border-[#6B7280] hover:shadow-[inset_0_0_5px_1px_rgba(0,0,0,0.08)] transition-all cursor-pointer">
        <Settings className="stroke-gray" />
        <p className="font-bold text-gray">Configurações</p>
      </div>
    </div>

  </div>

  {/* Perfil */}
  <div className="flex-none h-24 flex items-center">
    perfil
  </div>

</div>

      <div className="w-3/4 bg-amber-300">
        asda
      </div>
    </div>
  );
}

export default App;