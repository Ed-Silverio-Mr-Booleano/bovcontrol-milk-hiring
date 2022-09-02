# Edmilson Silvério

# API REST usando EXPRESS | MongoDB | Clean Architecture | TDD | Conventional Commit | Typescript

# Backend Challenge 20220626


## Introdução

Nesse desafio trabalharemos no desenvolvimento de uma REST API que utilizará os dados do projeto Open Food Facts, um banco de dados aberto com informação nutricional de diversos produtos alimentícios.

O projeto tem como objetivo dar suporte a equipe de nutricionistas da empresa Fitness Foods LC para que possam comparar de maneira rápida a informação nutricional dos alimentos da base do Open Food Facts.


## Instalar a app

    npm install or yarn

## Fazer o build

    npm build or yarn build
    
## Utilizar a API remotamente
    https://challenge-20220626-ps-coodesh.herokuapp.com/
    
## Configurar a base de dados
    
    criar a DB `PRODUCTS_DB` e a COLLECTION `products` num servidor MongoDB 
    
    criar um arquivo .env baseando se nas vars do .env.exemple, tais como: URI, COLLECTION e PORT
    
## Executar a app
    npm start or yarn start
    

## Build app

    yarn buid or npm build
    yarn start

# REST API

A REST API deste aplicativo é descrita abaixo:

- `GET /`: Retornar um Status: 200 e uma Mensagem "Fullstack Challenge 20201026"
- `GET /products/:code`: Obter a informação somente de um produto;
- `GET /products`: Listar todos os produtos da base de dados, utilizar o sistema de paginação para não sobrecarregar a `REQUEST`.

## Get: Listar todas as products

### Request

`GET /products`

    'application/json' http://localhost:PORT/products | https://challenge-20220626-ps-coodesh.herokuapp.com/products

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 41
    ETag: W/"29-yg9ElDIFi3l2DpUh535KUpXmtlg"
    Date: Thu, 23 Dec 2021 10:10:39 GMT
    Connection: keep-alive

   
	[
  {
    "code": 3661112502850,
    "barcode": "3661112502850(EAN / EAN-13)",
    "status": "imported",
    "imported_t": "2020-02-07T16:00:00Z",
    "url": "https://world.openfoodfacts.org/product/3661112502850",
    "product_name": "Jambon de Paris cuit à l'étouffée",
    "quantity": "240 g",
    "categories": "Meats, Prepared meats, Hams, White hams",
    "packaging": "Film en plastique, Film en plastique",
    "brands": "Tradilège, Marque Repère",
    "image_url": "https://static.openfoodfacts.org/images/products/366/111/250/2850/front_fr.3.400.jpg"
  },
  {
    "code": 3274080005003,
    "barcode": "Barcode:  3017620422003 (EAN / EAN-13)",
    "status": "imported",
    "imported_t": "2022-08-20T08:17:49+01:00",
    "url": "https://world.openfoodfacts.org/product/3274080005003/eaux-de-sources-cristaline",
    "product_name": "Eaux de sources - Cristaline - 1,5 l",
    "quantity": "400g",
    "categories": "Breakfasts, Spreads, Sweet spreads, fr:Pâtes à tartiner, Hazelnut spreads, Chocolate spreads, Cocoa and hazelnuts spreads",
    "packaging": "fr:PP 5 Ummi PLASTIQUE / PLASTIEK PAP 27 WWW PAPIER / PAPIER CIPAP 82 PANNEAU DE FIBRE COMPOSITES/ COMPOSIET VEZELPLAAT GL 70 VERRE / GLAS",
    "brands": "Ferrero"
  }
  ]

## Listar um único produto

### Request

`GET /products/:code`

    'application/json' http://localhost:PORTGET/products/:code | https://challenge-20220626-ps-coodesh.herokuapp.com/products/:code

### Response

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 41
    ETag: W/"29-WLapzflntobtY4yW3SAOfZgk+8Q"
    Date: Thu, 23 Dec 2021 12:29:49 GMT
    Connection: keep-alive

   {
    "code": 3274080005003,
    "barcode": "Barcode:  3017620422003 (EAN / EAN-13)",
    "status": "imported",
    "imported_t": "2022-08-20T08:17:49+01:00",
    "url": "https://world.openfoodfacts.org/product/3274080005003/eaux-de-sources-cristaline",
    "product_name": "Eaux de sources - Cristaline - 1,5 l",
    "quantity": "400g",
    "categories": "Breakfasts, Spreads, Sweet spreads, fr:Pâtes à tartiner, Hazelnut spreads, Chocolate spreads, Cocoa and hazelnuts spreads",
    "packaging": "fr:PP 5 Ummi PLASTIQUE / PLASTIEK PAP 27 WWW PAPIER / PAPIER CIPAP 82 PANNEAU DE FIBRE COMPOSITES/ COMPOSIET VEZELPLAAT GL 70 VERRE / GLAS",
    "brands": "Ferrero"
  }
     
## Usar a documentação com o Swagger.ui

### Request

`GET /docs`

    'application/json' http://localhost:PORT/docs | https://challenge-20220626-ps-coodesh.herokuapp.com/

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
* Swagger
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
* CORS
* Middlewares
* Deploy no Heroku
