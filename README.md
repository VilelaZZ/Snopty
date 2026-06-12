# Sistema de Apoio aos Estudos

## Sobre o Projeto

O Sistema de Apoio aos Estudos tem como objetivo ajudar usuários a organizar conteúdos de aprendizagem, reduzindo o excesso de informações disponíveis na internet.

A plataforma permitirá cadastrar e gerenciar:

* Tecnologias
* Métodos de estudo
* Cursos
* Trilhas de aprendizagem

## Tecnologias Utilizadas

### Frontend

* React
* Tailwind CSS

### Backend

* Python
* Django
* Django REST Framework

### Banco de Dados

* SQL Server (em definição para versões futuras)

---

# Instalação do Frontend

Acesse a pasta do projeto:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

---

# Instalação do Backend

Acesse a pasta do backend:

```bash
cd backend
```

Crie e ative o ambiente virtual:

```bash
python -m venv venv
```

Linux/macOS:

```bash
source venv/bin/activate
```

Windows:

```bash
venv\Scripts\activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

Execute as migrações:

```bash
python manage.py migrate
```

Inicie o servidor:

```bash
python manage.py runserver
```

---

# Estrutura do Projeto

```text
projeto/
├── frontend/
├── backend/
└── README.md
```

## Equipe

Projeto desenvolvido para auxiliar estudantes na organização de conteúdos, cursos e métodos de estudo, tornando o aprendizado mais eficiente.
