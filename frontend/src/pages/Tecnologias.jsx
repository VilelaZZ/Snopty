import { useEffect, useState } from "react";
import { listarTecnologias } from "../services/tecnologias.jsx";

function Tecnologias() {
    const [tecnologias, setTecnologias] = useState([]);

    useEffect(() => {
        async function carregarTecnologias() {
            try {
                const dados = await listarTecnologias();
                setTecnologias(dados);
            } catch (erro) {
                console.error(erro);
            }
        }

        carregarTecnologias();
    }, []);

    return (
        <div>
            {tecnologias.map((tecnologia) => (
                <div key={tecnologia.id}>
                    <h2>{tecnologia.nome}</h2>
                    <p>{tecnologia.descricao}</p>
                </div>
            ))}
        </div>
    );
}

export default Tecnologias;