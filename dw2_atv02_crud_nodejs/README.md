# AMPLI Store — loja de música e basquete com CRUD

Projeto Node.js + Express + EJS com catálogo conectado ao MySQL e painel administrativo para gerenciar produtos.

## Requisitos
- Node.js LTS
- MySQL 8+ ou MariaDB (Laragon também serve)

## Configuração
1. Inicie o MySQL no Laragon.
2. Crie o banco executando o arquivo `database.sql` no DBeaver/phpMyAdmin **ou** deixe a base `ampli_store` criada manualmente. O usuário configurado precisa ter permissão para criar/alterar tabelas.
3. Copie `.env.example` para `.env` e ajuste host, porta, usuário, senha e nome do banco conforme sua instalação.
4. No terminal da pasta do projeto, execute:

```bash
npm install
npm start
```

Na primeira inicialização, a aplicação cria a tabela `products` se necessário e insere os produtos demonstrativos caso a tabela esteja vazia.

Acesse `http://localhost:3000` para a loja e `http://localhost:3000/admin/produtos` para o CRUD.

## Operações CRUD
- **Create:** `/admin/produtos/novo` — cadastrar produto.
- **Read:** `/admin/produtos` — listar/consultar produtos; também aparece no catálogo público.
- **Update:** botão Editar — atualizar produto existente.
- **Delete:** botão Excluir — remover produto com confirmação.

Campos: nome, categoria, preço, etiqueta, descrição e URL da imagem. Categorias aceitas: Guitarras, Instrumentos, Acessórios e Basquete.

## Segurança
O painel administrativo está aberto para facilitar a atividade local/ acadêmica. **Não publique a aplicação na internet antes de adicionar autenticação e autorização para as rotas `/admin`.** Use credenciais próprias no `.env` e nunca envie esse arquivo ao GitHub.
