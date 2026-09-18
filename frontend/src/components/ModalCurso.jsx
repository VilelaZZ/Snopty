import { X } from 'lucide-react';
function ModalCurso({
  titulo,
  categoria,
  duracao,
  avaliacao,
  imagem,
  descricao,
  tags = [],
  plataforma = "Udemy",
  onClose,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      {/* Modal */}
      <div className="relative w-full max-w-[700px] overflow-hidden rounded-xl bg-[#1f2937] shadow-2xl">

        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-10 text-2xl text-white hover:text-gray-300"
          aria-label="Fechar"
        >
          <X />
        </button>

        {/* Imagem */}
        <div className="h-[220px] w-full">
          <img
            src={imagem}
            alt={titulo}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="p-5">

          {/* Título + plataforma */}
          <div className="flex items-start justify-between gap-4">

            <div>
              <h2 className="text-3xl font-bold text-white">
                {titulo}
              </h2>

              {/* Tags */}
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-gray-400 px-2 py-0.5 text-xs text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Plataforma */}
            <span className="whitespace-nowrap text-sm text-gray-300">
              {plataforma}
            </span>

          </div>

          {/* Avaliação e duração */}
          <div className="mt-3 flex items-center gap-4 text-sm">

            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-white">
                {avaliacao}
              </span>
              <span className="text-gray-400">
                / 5
              </span>
            </div>

            <div className="text-gray-300">
              {duracao}
            </div>

          </div>

          {/* Descrição */}
          <div className="mt-5 border-t border-gray-600 pt-4">

            <h3 className="mb-2 font-semibold text-white">
              Sobre
            </h3>

            <p className="max-h-[120px] overflow-y-auto text-sm leading-relaxed text-gray-300">
              {descricao}
            </p>

          </div>

          {/* Botão */}
          <button
            className="mt-5 w-full rounded-md bg-[#2bb889] py-3 font-semibold text-white transition hover:bg-[#25a77c]"
          >
            Abrir Curso
          </button>

        </div>

      </div>
    </div>
  );
}

export default ModalCurso;