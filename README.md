# 📚 Fluência - TCC

> Um projeto inovador para melhorar a fluência de leitura em crianças através de testes interativos e análise de desempenho.

![License](https://img.shields.io/badge/license-ISC-blue)
![Node.js](https://img.shields.io/badge/node.js-v18+-green)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Como Usar](#como-usar)
- [Rotas da API](#rotas-da-api)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Documentação Detalhada](#documentação-detalhada)

## 🎯 Sobre o Projeto

Fluência é uma aplicação web desenvolvida como TCC, que auxilia crianças no desenvolvimento da fluência de leitura. O projeto combina testes interativos, análise de desempenho e recursos administrativos para acompanhamento de progresso.

**Autor:** Felipe Silva Mantuani, Eduardo Ribeiro, Henrique Costa e Miguel de Mello  
**Versão:** 1.0.0

## ✨ Funcionalidades

- 🔐 **Autenticação de Usuários** - Login e cadastro com segurança via bcrypt
- 📖 **Testes de Leitura** - Testes interativos para avaliar fluência
- 📊 **Histórico de Testes** - Visualização de progresso e histórico
- 👤 **Perfil de Usuário** - Gerenciamento de informações pessoais
- 🛠️ **Painel Administrativo** - Gerenciamento de textos de leitura
- 🤖 **Integração IA** - Análise inteligente usando Google GenAI
- 📤 **Upload de Recursos** - Suporte para uploads de arquivos

## 🛠️ Tecnologias

### Backend
- **Express.js** - Framework web Node.js
- **Sequelize** - ORM para banco de dados
- **MySQL** - Banco de dados relacional
- **Bcrypt** - Hash seguro de senhas
- **Express-session** - Gerenciamento de sessões
- **Method-override** - Suporte para métodos HTTP adicionais

### Frontend
- **EJS** - Template engine
- **Bootstrap** - Framework CSS
- **JavaScript** - Interatividade

### IA e Integração
- **Google GenAI** - Análise inteligente de textos
- **Axios** - Cliente HTTP

## 🏗️ Estrutura do Projeto

```
fluencia-TCC/
├── 📄 app.js                    # Configuração principal da aplicação
├── 📄 server.js                 # Inicialização do servidor
├── 📄 package.json              # Dependências do projeto
├── 📄 .env.example              # Exemplo de variáveis de ambiente
├── 📄 .env                       # Variáveis de ambiente (local)
├── 📁 config/                   # Configurações
├── 📁 controllers/              # Lógica de negócio
├── 📁 models/                   # Modelos de dados
├── 📁 routes/                   # Definição de rotas
├── 📁 views/                    # Templates EJS
├── 📁 public/                   # Assets estáticos
├── 📁 uploads/                  # Arquivos enviados
└── 📁 DumpDB/                   # Dumps do banco de dados
```

## 📦 Instalação

### Pré-requisitos
- Node.js (v18 ou superior)
- MySQL (v5.7 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/Lipezl/Fluence-TCC.git
cd fluencia-TCC
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o banco de dados**
```bash
# Importe os dumps SQL no MySQL
mysql -u seu_usuario -p seu_banco < DumpDB/fluence_usuarios.sql
mysql -u seu_usuario -p seu_banco < DumpDB/fluence_testes.sql
mysql -u seu_usuario -p seu_banco < DumpDB/fluence_textos_leitura.sql
```

4. **Configure as variáveis de ambiente**
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o .env com suas configurações
```

5. **Inicie o servidor**
```bash
npm start
# ou com nodemon para desenvolvimento
npx nodemon server.js
```

O servidor estará disponível em `http://localhost:3000`

## ⚙️ Configuração

### Variáveis de Ambiente (.env)

```env
# Banco de dados
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=fluence

# APIs e Tokens
TOKEN=seu_token_huggingface
APIKEY=sua_chave_google_genai
```

### Conectando ao Banco de Dados

A configuração do banco está em `config/db.js`. Certifique-se de que:
- MySQL está rodando
- As credenciais estão corretas no `.env`
- O banco de dados foi criado com os dumps

## 🚀 Como Usar

### Fluxo Principal

1. **Cadastro/Login**
   - Acesse http://localhost:3000/cadastro
   - Crie uma conta ou faça login
   - Credenciais são armazenadas com hash bcrypt

2. **Realizar Testes**
   - Navegue para a seção de testes
   - Leia os textos fornecidos
   - Sistema analisa e avalia sua fluência

3. **Acompanhar Desempenho**
   - Visualize dashboard com histórico
   - Veja progresso ao longo do tempo
   - Analise métricas de fluência

4. **Painel Admin** (para administradores)
   - Gerenciar textos de leitura
   - Visualizar desempenho de usuários
   - Adicionar novo conteúdo

## 🔗 Rotas da API

### Autenticação
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/login` | Fazer login |
| POST | `/cadastro` | Criar nova conta |
| GET | `/logout` | Sair da sessão |

### Testes
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/teste` | Página de testes |
| POST | `/teste` | Submeter teste |
| GET | `/historico` | Ver histórico de testes |

### Usuário
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/perfil` | Exibir perfil |
| PUT | `/perfil` | Atualizar perfil |

### Desempenho
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/desempenho` | Dashboard de desempenho |

### Admin
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/admin/textos` | Listar textos |
| POST | `/admin/textos` | Criar novo texto |
| PUT | `/admin/textos/:id` | Atualizar texto |
| DELETE | `/admin/textos/:id` | Deletar texto |

## 📂 Estrutura de Pastas

### 📁 `/config`
Configurações centralizadas da aplicação.

**Arquivos:**
- `db.js` - Configuração de conexão com o MySQL via Sequelize

```javascript
// Exemplo de uso
import db from './config/db.js';
```

---

### 📁 `/controllers`
Controladores que contêm a lógica de negócio das rotas.

**Arquivos:**
- `authController.js` - Autenticação (login, cadastro, logout)
- `testeController.js` - Gerenciamento de testes
- `admin/textosController.js` - Gerenciamento administrativo de textos

**Exemplo de Estrutura:**
```javascript
export const login = async (req, res) => {
  // Lógica de login
};

export const cadastro = async (req, res) => {
  // Lógica de cadastro
};
```

---

### 📁 `/models`
Modelos de dados que definem a estrutura das tabelas e relações.

**Arquivos:**
- `UserModel.js` - Modelo de usuário
- `TesteModel.js` - Modelo de testes realizados
- `TextoModel.js` - Modelo de textos de leitura

**Exemplo:**
```javascript
// UserModel.js
import Sequelize from 'sequelize';
import db from '../config/db.js';

const User = db.define('usuarios', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nome: Sequelize.STRING,
  email: Sequelize.STRING,
  senha: Sequelize.STRING,
  // ... mais campos
});

export default User;
```

---

### 📁 `/routes`
Define as rotas HTTP da aplicação.

**Arquivos:**
- `index.js` - Rotas principais (home, dashboard)
- `authRoutes.js` - Rotas de autenticação
- `testeRoutes.js` - Rotas de testes
- `prompt.js` - Rotas de processamento de prompts IA
- `admin/textosRoutes.js` - Rotas administrativas de textos

**Exemplo:**
```javascript
import express from 'express';
const router = express.Router();

router.get('/teste', testeController.getTeste);
router.post('/teste', testeController.createTeste);

export default router;
```

---

### 📁 `/views`
Templates EJS para renderização do frontend.

**Arquivos:**
- `index.ejs` - Página inicial
- `login.ejs` - Página de login
- `cadastro.ejs` - Página de cadastro
- `teste.ejs` - Página de teste de leitura
- `desempenho.ejs` - Dashboard de desempenho
- `historico.ejs` - Histórico de testes
- `perfil.ejs` - Perfil do usuário
- `partials/header.ejs` - Header comum
- `partials/footer.ejs` - Footer comum

**Estrutura do EJS:**
```ejs
<%- include('partials/header') %>

<main>
  <!-- Conteúdo específico da página -->
</main>

<%- include('partials/footer') %>
```

---

### 📁 `/public`
Arquivos estáticos (CSS, JavaScript, imagens).

**Estrutura:**
```
public/
├── css/
│   ├── styles.css              # Estilos gerais
│   ├── styleslogin.css         # Estilos da página de login
│   ├── styledesempenho.css     # Estilos do dashboard
│   └── stylesPerfil.css        # Estilos do perfil
├── img/                        # Imagens e ícones
└── js/                         # Scripts JavaScript frontend
```

---

### 📁 `/uploads`
Diretório para arquivos enviados pelos usuários.

- Documentos
- Imagens
- Outros recursos

---

### 📁 `/DumpDB`
Dumps SQL para restauração/inicialização do banco de dados.

**Arquivos:**
- `fluence_usuarios.sql` - Tabela de usuários
- `fluence_testes.sql` - Tabela de testes
- `fluence_textos_leitura.sql` - Tabela de textos

**Como usar:**
```bash
mysql -u usuario -p fluence < DumpDB/fluence_usuarios.sql
```

---

## 📚 Documentação Detalhada

### Autenticação

O sistema utiliza **bcrypt** para hash de senhas e **express-session** para gerenciamento de sessões.

```javascript
// Login
POST /login
{ email: "user@example.com", senha: "senha123" }

// Cadastro
POST /cadastro
{ nome: "João", email: "joao@example.com", senha: "senha123" }

// Logout
GET /logout
```

---

### Testes de Fluência

O usuário realiza testes de leitura que são analisados usando IA.

```javascript
// Obter teste
GET /teste

// Submeter resultado
POST /teste
{ texto_id: 1, tempo_leitura: 120, acertos: 95 }

// Ver histórico
GET /historico
```

---

### Integração com IA

A aplicação integra **Google GenAI** para análise inteligente de textos.

- Arquivo: `routes/prompt.js`
- Variável de ambiente necessária: `APIKEY` (Google GenAI)

---

### Gerenciamento de Sessão

A sessão do usuário é mantida em memória durante a execução.

```javascript
app.use(session({ 
  secret: 'secreto', 
  resave: false, 
  saveUninitialized: false 
}));
```

---

## 🔒 Segurança

- ✅ Senhas hasheadas com bcrypt
- ✅ Sessões seguras com tokens secretos
- ✅ Validação de entrada
- ✅ Proteção contra SQL Injection via Sequelize
- ⚠️ Recomenda-se usar HTTPS em produção

---

## 🎓 Créditos

**Desenvolvido por:** Felipe Silva Mantuani, Eduardo Ribeiro, Henrique Costa e Miguel de Mello
**Orientador:** Flavia Beatriz Rodrigues Prisco da Cunha
**Instituição:** IFSP - Jacareí

---

<div align="center">

**[⬆ Voltar ao topo](#-fluência---tcc)**

</div>
