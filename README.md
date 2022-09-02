# Edmilson Silvério

# API REST usando EXPRESS | MongoDB | Clean Architecture | TDD | Conventional Commit | Typescript

# Desafio para desenvolvedor backend


## Introdução

Olá dev, tudo bem?


A Bovcontrol tem como missão digitalizar a pecuária, trabalhamos coletando e analisando dados para assim aumentar a produtividade, eficiência e rentabilidade do agronegócio.


Para conseguir alcançar esse objetivo nos tornamos um time multidisciplinar, onde diferentes habilidade combinadas nos faz crescer para o futuro que almejamos.

Buscamos pessoas que sejam engajadas com nosso objetivo, que sejam criativas e àvidas por criar soluções que causam impacto na sociedade, desenvolvedores que vão além do código, que consigam entender as dores de nossos parceiros e que ajudem a pensar, desenvolver e implantar soluções.


## Instalar a app

    npm install or yarn

## Fazer o build

    npm build or yarn build
    
## Utilizar a API remotamente
    https://bovcontrol-milk-hiring.herokuapp.com/
    
## Configurar a base de dados
    
    criar a DB `MILK_HIRING` e a COLLECTION1 `farmer` COLLECTION2 `milkhiring` num servidor MongoDB 
    
    criar um arquivo .env baseando-se nas vars do .env.exemple, tais como: URI, COLLECTION1e2 e PORT
    
## Executar a app
    npm start or yarn start
    

## Build app

    yarn buid or npm build
    yarn start

# REST API

A REST API deste aplicativo é descrita abaixo:

- `GET /farmers/`: `Lista todos os fazendeiros`
- `POST /farmers`: `Cria um fazendeiro`.

## Get: Listar todas as products

### Request

`GET /farmers`

    'application/json' http://localhost:PORT/farmers | https://bovcontrol-milk-hiring.herokuapp.com//farmers

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 41
    ETag: W/"29-yg9ElDIFi3l2DpUh535KUpXmtlg"
    Date: Thu, 23 Dec 2021 10:10:39 GMT
    Connection: keep-alive

   
	

## Tecnologias usadas
> ## Princípios

* Single Responsibility Principle (SRP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)

> ## Design Patterns

* Adapter
* Dependency Injection

> ## Metodologias e Designs

* TDD
* Clean Architecture
* Conventional Commits
* GitFlow
* Use Cases
* Continuous Integration
* Continuous Delivery

> ## Bibliotecas e Ferramentas

* NPM
* Typescript
* Git
* Jest
* MongoDb
* Express
* Supertest
* Husky
* Lint Staged
* Eslint
* Standard Javascript Style
* Nodemon

> ## Features do Node

* Documentação de API com Swagger
* API Rest com Express
* Middlewares
* Deploy no Heroku
