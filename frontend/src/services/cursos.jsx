import API_URL from "./api.jsx";

// GET - listar todos os cursos
export async function listarCursos() {
    const resposta = await fetch(`${API_URL}/cursos/`);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar cursos.");
    }

    return await resposta.json();
}

// GET - buscar um curso pelo ID
export async function buscarCurso(id) {
    const resposta = await fetch(`${API_URL}/cursos/${id}/`);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar curso.");
    }

    return await resposta.json();
}

// POST - criar curso
export async function criarCurso(dados) {
    const resposta = await fetch(`${API_URL}/cursos/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
        throw new Error("Erro ao criar curso.");
    }

    return await resposta.json();
}

// PUT - atualizar curso
export async function atualizarCurso(id, dados) {
    const resposta = await fetch(`${API_URL}/cursos/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
        throw new Error("Erro ao atualizar curso.");
    }

    return await resposta.json();
}

// DELETE - excluir curso
export async function excluirCurso(id) {
    const resposta = await fetch(`${API_URL}/cursos/${id}/`, {
        method: "DELETE",
    });

    if (!resposta.ok) {
        throw new Error("Erro ao excluir curso.");
    }

    return true;
}