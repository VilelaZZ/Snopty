import {
  Star,
  Bookmark,
} from "lucide-react";

function Curso({
  titulo,
  categoria,
  duracao,
  avaliacao,
  imagem,
  salvo,
  onSalvar,
}) {

  return (

    <div className="min-w-[280px] w-[330px] hover:scale-101 transition bg-[#1f2937] text-white rounded-lg shadow-md overflow-hidden flex-shrink-0">

      {/* Imagem */}

      <div className="relative h-[150px]">

        <img
          src={imagem}
          alt={titulo}
          className="w-full h-full object-cover"
        />

        {/* salvar */}
        <button
          onClick={onSalvar}
          className="absolute top-3 right-3 bg-white rounded-md p-1.5 shadow hover:scale-105 transition"
        >

          <Bookmark
            size={19}
            className={
              salvo
                ? "text-[#4f7cff]"
                : "text-gray-400"
            }
            fill={salvo ? "currentColor" : "none"}
          />

        </button>

      </div>

      {/* Informações curso */}

      <div className="p-4">

        <h3 className="font-bold text-sm">
          {titulo}
        </h3>

        <p className="text-xs text-white mt-1">
          {categoria} • Intermediário
        </p>

        <p className="text-xs text-gray-400 mt-3">
          Aprenda os principais conceitos e desenvolva novas
          habilidades através deste curso.
        </p>

        <p className="text-[10px] text-gray-400 mt-3">
          Duração do curso: {duracao}
        </p>

        {/* Estrelas */}

        <div className="mt-3">

          <div className="inline-flex gap-1 border bg-[#EF4444] border-[#EF4444] rounded-md px-2 py-1">

            {[1, 2, 3, 4, 5].map((estrela) => (

              <Star
                key={estrela}
                size={14}

                className={
                  estrela <= avaliacao
                    ? "text-[#f59e0b]"
                    : "text-gray-300"
                }

                fill={
                  estrela <= avaliacao
                    ? "currentColor"
                    : "none"
                }
              />

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Curso;