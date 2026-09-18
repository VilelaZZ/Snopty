function ModalCurso({
  titulo,
  categoria,
  duracao,
  avaliacao,
  imagem,
  onClose,
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-[700px] rounded-lg shadow-xl overflow-hidden">

        {/* imagem curso */}

        <img
          src={imagem}
          alt={titulo}
          className="w-full h-[220px] object-cover"
        />

        {/* Informações */}

        <div className="p-6">

          <h2 className="text-2xl font-bold text-black">
            {titulo}
          </h2>

          <p className="text-gray-500 mt-2">
            {categoria}
          </p>

          <p className="text-gray-500 mt-2">
            Duração: {duracao}
          </p>

          <p className="text-gray-500 mt-2">
            Avaliação: {avaliacao}/5
          </p>

          <button
            onClick={onClose}
            className="mt-6 bg-[#4f7cff] text-white px-5 py-2 rounded-lg"
          >
            Fechar
          </button>

        </div>

      </div>

    </div>
  );
}

export default ModalCurso;