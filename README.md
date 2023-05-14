# Delivery App #

Aplicação de entregas de bebidas, com diferentes fluxos de acesso. Neste projeto foi desenvolvido o back-end, front-end e o banco de dados, com padrão API Rest e arquitetura MSC. O banco de dados é em MySQL com controle acesso auxiliado pelo ORM Sequelize.

## Para rodar o projeto ##

> É necessário ter Docker na sua máquina local para executar os seguintes comandos.

- Rode o comando `docker-compose up -d` para subir o container do MySQL.
- Em seguida rode o comando `npm install` para instalar as dependências do projeto via npm
- Por fim, rode o comando `npm start` para iniciar a aplicação

## Para navegar na aplicação

- A tela inicial da aplicação é a página de Login, como a aplicação já conta com arquivos para popular o banco de dados com usuários, você pode usar o usuário com email "batatinha@email.com" e senha "batatinha" para logar direto e não precisar cadastrar um novo usuário.
- Caso queira logar como pessoa vendedora, pode usar o email "aline@deliveryapp.com" e senha "batatinha" que você será redirecionado à página de pedidos da pessoa vendedora (estilização em andamento), caso tenha sido feito algum pedido.


## 🛠️ Construído com

* [React](https://pt-br.reactjs.org/)
* [Node](https://nodejs.org/pt-br/docs/)
* [Axios](https://axios-http.com/ptbr/docs/intro)
* [Express](https://expressjs.com/pt-br/)
* [MySQL](https://dev.mysql.com/doc/)
* [Sequelize](https://sequelize.org/docs/v6/getting-started/)
* [JWT](https://jwt.io/)
* [Chai](https://www.chaijs.com/)
* [Mocha](https://mochajs.org/)
* [Sinon](https://sinonjs.org/releases/latest/)

