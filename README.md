<p align="center">
  <img src="https://github.com/cleitoncorreas/cleitoncorreas/blob/4fa53ca31d1bf2a525be593615104f1bbea71da9/Projetos/Warehouse/Capa/capa-warehouse.png"/>
</p>

# 🏛️ Warehouse (Frontend)
Projeto agenda com backend Ruby on Rails API e frontend em Angular e Monile em NativeScript

## 🌐 Heroku
https://dashboard.heroku.com/apps/warehouse-angular-web

## 🚀 Começando
Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

## 📋 Pré-requisitos

```
Docker Desktop
```

## 🔧 Instalação do Docker 🐳
Siga os passos nos links abaixo para instalação do Docker de acordo com seu sistema operacional:

* [Como instalar o Docker](https://docs.docker.com/engine/installation/)
* [Como instalar o Docker Compose](https://docs.docker.com/compose/)

## ⬇️ Clonar o projeto
Para obter uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste execute o comando abaixo:

```
git clone https://github.com/cleitoncorreas/warehouse-web.git
```

logo após o download, entre na pasta do projeto

```
cd warehouse-web
```

## ⚙️ Build do Projeto
Para fazer o Build de todos os nossos containers basta rodar (dentro do projeto):

```
docker-compose build
```

Agora precisamos criar nosso banco de dados e rodar as migrações e seeds, utilizando o docker-compose para fazer isso de maneira fácil. No console rode:

```
docker-compose run application rake db:create db:migrate db:seed
```

Para subir nossos containers, rode no console:

```
docker-compose up
```

Para rodar em background utilize o _-d_ após i _up_:

```
docker-compose up -d
```

## 🌐 Home

```
http://localhost:4200
```

## ⚙️ Executando os testes

No diretório do projeto rode o comando:

```
docker-compose run application ng test
```

## 🛠️ Construído com

* @angular/cli: 6.2.9
* @angular/core: 6.1.10
* node: 14.15.4
* npm: 6.14.10
* express: 4.17.1
* jquery: 3.2.1
* moment: 2.18.1
* ngx-bootstrap: "^4.3.0
* ngx-loading: 3.0.1
* ngx-pagination: 5.0.0
* rxjs: 6.6.3
* angular2-token: 0.2.0
* animate.css: 4.1.1
* bootstrap: 3.3.7
* express": 4.17.1
* eonasdan-bootstrap-datetimepicker: 4.17.47

## ✒️ Autores

* **Cleiton Corrêa** - *Trabalho Inicial* - [Developer](https://github.com/cleitoncorreas)

## 📄 Licença

Este projeto está sob a licença OpenSource - veja o arquivo [LICENSE.md](https://github.com/cleitoncorreas/notebook_api/LICENSE.md) para detalhes.

## 🎁 Gratidão

* Projeto utilizado para fins de estudo 📢.
* Obrigado a todos que ajudaram no projeto 🤓.


---
⌨️ com ❤️ por [Cleiton Corrêa](https://github.com/cleitoncorreas) 😊
