
# Projeto Trybesmith

Para este projeto foi criado uma loja de itens medievais, no formato de uma API, utilizando Typescript.

Foi desenvolvido todas as camadas da aplicação (Models, Service e Controllers) em seu código e, por meio dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD - Create, Read, Update e Delete).

Foi criado alguns endpoints que irão ler e escrever em um banco de dados, utilizando o MySQL.


## Instalação

1. Clone o repositório.
```bash
git clone git@github.com:Thromoto/project-trybesmith.git
```
2. Entre na pasta do repositório que você acabou de clonar.

3. Rode o serviço node e db com o comando.
```bash
docker-compose up -d
```
* Lembre-se de parar o mysql se estiver usando localmente na porta padrão (3306), ou adapte, caso queria fazer uso da aplicação em containers;
* Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`;
* A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code;
* Use o comando `docker exec -it trybesmith bash`.
* Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

4. Instale as dependências.
```bash
npm install
```


## Stack utilizada

Typescript, MySQL, API Node Express, CRUD, usando a arquitetura em camadas (model-service-controller), Sequelize.