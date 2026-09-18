function CursoHome({
  titulo,
  categoria,
  nivel,
  descricao,
  imagem,
  progresso,
}) {

  return (
    <div className="w-[330px] bg-[#1f2937] text-white rounded-lg shadow-md overflow-hidden">

      {/* Imagem */}

      <div className="relative h-[150px]">

        <img
          src={imagem}
          alt={titulo}
          className="w-full h-full object-cover"
        />

      </div>

      {/* Informações */}

      <div className="p-4">

        <h3 className="font-bold text-sm">
          {titulo}
        </h3>

        <p className="text-xs text-white mt-1">
          {categoria} • {nivel}
        </p>

        <p className="text-xs text-gray-400 mt-3">
          {descricao}
        </p>

        {/* Progresso */}

        <div className="mt-4">

          <div className="w-full h-[5px] bg-gray-500 rounded-full overflow-hidden">

            <div
              className="h-full bg-[#4f7cff] rounded-full"
              style={{ width: `${progresso}%` }}
            />

          </div>

          <p className="text-[10px] text-gray-400 mt-1 text-right">
            {progresso}% concluído
          </p>

        </div>

      </div>

    </div>
  );
}

export default CursoHome;