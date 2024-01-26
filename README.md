# Projeto de Autenticação JWT com TypeScript, Nest.js e Prisma ORM

Este é um projeto de exemplo para prática na implementação de autenticação JWT utilizando TypeScript, Nest.js e Prisma ORM.

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes requisitos instalados em sua máquina:

- Node.js
- npm (ou yarn)
- Docker (opcional, para executar o banco de dados usando contêineres)

## Instalação

1. Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/tamicaires/jwt-nest.git
```

2. Navegue até o diretório do projeto:

```bash
cd jwt-nest
```

3. Instale as dependências do projeto:

```bash
npm install
```

## Configuração do Banco de Dados

Este projeto utiliza o Prisma ORM com um banco de dados PostgreSQL. Certifique-se de ter o PostgreSQL instalado em sua máquina ou utilize o Docker para executar um contêiner PostgreSQL.

1. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome-do-banco"
```

2.Substitua usuario, senha e nome-do-banco com suas credenciais e nome do banco de dados PostgreSQL.

Execute as migrações do Prisma para criar as tabelas necessárias no banco de dados:

```bash
npx prisma migrate dev --name init
```

ou

```bash
yarn prisma migrate dev --name init
```

## Executando o Servidor

Depois de instalar as dependências e configurar o banco de dados, você pode iniciar o servidor Nest.js:

```bash
npm run start:dev
```
ou

```bash
yarn start:dev
```

Isso iniciará o servidor em modo de desenvolvimento e estará pronto para receber solicitações.

## Uso
Você pode começar a enviar solicitações para as rotas de autenticação utilizando JWT. O projeto vem com rotas de exemplo para registro, login e obtenção de informações do usuário autenticado.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com melhorias, correções de bugs ou novos recursos.

## Autor
Tamires Caires

## Licença
Este projeto está licenciado sob a MIT License.

   
