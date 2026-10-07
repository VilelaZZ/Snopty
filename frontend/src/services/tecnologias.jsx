import API_URL from "./api.jsx";

// GET - listar todas as tecnologias
export async function listarTecnologias() {
    const resposta = await fetch(`${API_URL}/tecnologias/`);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar tecnologias.");
    }

    return await resposta.json();
}

// GET - buscar uma tecnologia pelo ID
export async function buscarTecnologia(id) {
    const resposta = await fetch(`${API_URL}/tecnologias/${id}/`);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar tecnologia.");
    }

    return await resposta.json();
}

// POST - criar tecnologia
export async function criarTecnologia(dados) {
    const resposta = await fetch(`${API_URL}/tecnologias/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
        throw new Error("Erro ao criar tecnologia.");
    }

    return await resposta.json();
}

// PUT - atualizar tecnologia
export async function atualizarTecnologia(id, dados) {
    const resposta = await fetch(`${API_URL}/tecnologias/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
        throw new Error("Erro ao atualizar tecnologia.");
    }

    return await resposta.json();
}

// DELETE - excluir tecnologia
export async function excluirTecnologia(id) {
    const resposta = await fetch(`${API_URL}/tecnologias/${id}/`, {
        method: "DELETE",
    });

    if (!resposta.ok) {
        throw new Error("Erro ao excluir tecnologia.");
    }

    return true;
}