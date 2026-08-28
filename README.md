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

* Supabase

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

é necessária a instalação do Node.js 


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
Antes de executar o migrate, crie uma pasta .env no backend e adicione:
```bash
SUPABASE_URL=https://wgqtljewqarqaoqqolbe.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_Y8kJueFGnr1_9RPWn8AlWA_B2ifgHUB
SUPABASE_SECRET_KEY=
SUPABASE_JWKS_URL=https://wgqtljewqarqaoqqolbe.supabase.co/auth/v1/.well-known/jwks.json

DB_NAME=postgres
DB_USER=postgres.wgqtljewqarqaoqqolbe
DB_PASSWORD=
DB_HOST=aws-0-sa-east-1.pooler.supabase.com
DB_PORT=5432
```

Link do Serviço(Tecnologia e Cursos)
```bash
http://127.0.0.1:8000/api/cursos/?format=api
```
```bash
http://127.0.0.1:8000/api/tecnologias/?format=api
```
Link Editar e Excluir
```bash
http://127.0.0.1:8000/api/cursos/id do item que vc queira editar/
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


Fluxo de Trabalho com Git
Estrutura de Branches

Cada funcionalidade deve ser desenvolvida em sua própria branch.

main
│
├── feature/login
├── feature/cadastro
├── feature/dashboard
├── feature/cursos
├── feature/progresso
├── feature/ranking
├── feature/chatbot
└── feature/admin
Clonando o Projeto
git clone URL_DO_REPOSITORIO
cd NOME_DO_PROJETO
Atualizando a Branch Main

Antes de iniciar uma nova funcionalidade:

git checkout main
git pull origin main
Criando uma Nova Branch
git checkout -b feature/nome-da-funcionalidade

Exemplos:

git checkout -b feature/login
git checkout -b feature/cursos
git checkout -b feature/ranking
Salvando Alterações
git add .
git commit -m "Descrição da alteração"

Exemplo:

git commit -m "Implementa tela de login"
Enviando a Branch para o GitHub
git push origin feature/nome-da-funcionalidade

Exemplo:

git push origin feature/login
Pull Requests

Após concluir uma funcionalidade:

Faça o push da branch.
Abra um Pull Request para a branch main.
Aguarde a revisão do código.
Após aprovação, realize o merge.
📋 Boas Práticas
Não desenvolver diretamente na branch main.
Sempre atualizar sua branch antes de iniciar uma tarefa.
Criar uma branch para cada funcionalidade.
Utilizar mensagens de commit claras e objetivas.
Testar a funcionalidade antes de abrir um Pull Request.
Manter o código organizado e documentado.



# Conceito de pronto:
Somente vai ficar pronto quando o Front-End, Back-End e SQL estiver se comunicando, quando o código estiver revisado e funcionando de acordo com o esperado.
