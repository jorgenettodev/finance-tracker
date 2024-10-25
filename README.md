# O que aprendi neste projeto

## Iniciando um projeto NestJS
    Primeiro você deve instalar o NestJS no teu pc.
        `npm i -g @nestjs/cli`

    Depois é necessário criar uma aplicação NestJS
        `nest new app`
    
    Depois entra depois da pasta do app
        `cd app`

    Instalar dependências
        `npm install`

## Criando as primeiras rotas com Nest

### Primeiro você precisa criar um controller e passar qual caminho
    Exemplo:
        @Controller('app')

        Para acessar este controller você precisa digitar http://localhost:3000/app
    
## Módulos
Vamos criar um módulo de usuários:

    `nest generate module users`

## DTO
[como criar um dto e pra que serve](https://youtu.be/2n3xS89TJMI?list=PLlaDAvA2MhR2jb8zavu6I-w1BA878aHcB&t=1570)
- DTO (Data Transfer Object) é um schema utilizado para receber dados durante requests.
- Ele simplifica o processo, pois vocÊ só precisa alterar no próprio DTO ao invés de mudar nas funções
- O DTO é uma classe typescript.
- O DTO também é usado para validar o request, no caso abaixo ele possui name e email. Com isto podemos utilizar
decorators para checar se o `nome e email` são válidos

    Exemplo

    DTO
    
    CreateUserDTO
        name: string
        email: string    
         

    POST method criar user
        createUser(createUserDto: CreateUserDTO)
            name = createUserDTO.name
            email = createUserDTO.email
    
    



### Depois é necessário criar as rotas usando métodos HTTP
        @Get()
        @Post()
        @Delete()
        @Put()
        @Patch()

        Exemplo:

        @Get()
        helloWorld(): string {
            return 'hello world';
        }
            Ao entrar no http://localhost:3000/app e usar um GET, você irá receber um 'hello world'.

### Request Params - Como receber parâmetros via url
    @Get(':nome')
        helloNome(@Param('nome') parametro: string): string {
            return `Olá, ${parametro}`;
        }

    No exemplo acima:
    - nós estamos criando um método Get que irá receber um parâmetro, que iremos chamar de 'nome'. É necessário usar esta sintaxe
    para que ele entenda que é um parâmetro.
        (':nome')
    - usamos o decorator @Param para pegar este parâmetro (note que é igual ao nome dentro de @Get(':nome'))

## Dotenv
    - Utilizado para guardar variáveis de ambiente, por evitar que as variáveis vazem no github.

    Como usar:
    - Instalar o dotenv no npm: `npm install dotenv`
    - Criar um arquivo .env

## Docker
    - Primeiro, você precisa instalar o Docker e Docker Compose
    - Criar um arquivo docker-compose.yaml com as configurações necessárias
        - Neste projeto utilizamos apenas a imagem do PostgreSQL
    - Rodar o comando `docker-compose up -d` para rodar o container PostgreSQL

## Prisma


## Swagger
    - Instalar o swagger através do npm


## Referencias
    
- [NestJS — Controllers (Part 3 of NestJS tutorial](https://medium.com/@friskovec.miha/nestjs-controllers-part-3-of-nestjs-tutorial-5bdcb69f02f5)
- [Subir um repositorio local para um repo remoto](https://www.youtube.com/watch?v=bvGjo1iViBw)
- [Claude - Criando aplicacao com Nest, Prisma, Docker](https://claude.site/artifacts/b1aa5cee-6919-4473-a97f-233053b66e7c)
- [Docker - compose](https://github.com/docker/compose)
- [Using swagger with NestJS](https://medium.com/@andremazmol/using-swagger-with-nestjs-b94dae253613#:~:text=Open%20your%20main.ts%20%28or%20the%20file%20where%20you,%27.%2Fapp.module%27%3B%20import%20%7B%20DocumentBuilder%2C%20SwaggerModule%20%7D%20from%20%27%40nestjs%2Fswagger%27%3B)
- [Prisma Migrate](https://www.prisma.io/docs/orm/prisma-migrate/getting-started)
- [NestJS Crash Crouse](https://www.youtube.com/watch?v=2n3xS89TJMI&list=PLlaDAvA2MhR2jb8zavu6I-w1BA878aHcB&index=1&ab_channel=MariusEspejo)