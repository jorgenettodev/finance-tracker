# O que aprendi neste projeto

## Iniciando um projeto NestJS
    nest new app

## Criando as primeiras rotas

### Primeiro você precisa criar um controller e passar qual caminho
    Exemplo:
        @Controller('app')

        Para acessar este controller você precisa digitar /app

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



## Referencias
    
- [NestJS — Controllers (Part 3 of NestJS tutorial](https://medium.com/@friskovec.miha/nestjs-controllers-part-3-of-nestjs-tutorial-5bdcb69f02f5)
- [Subir um repositorio local para um repo remoto](https://www.youtube.com/watch?v=bvGjo1iViBw)
- [Claude - Criando aplicacao com Nest, Prisma, Docker](https://claude.site/artifacts/b1aa5cee-6919-4473-a97f-233053b66e7c)
- [Using swagger with NestJS](https://medium.com/@andremazmol/using-swagger-with-nestjs-b94dae253613#:~:text=Open%20your%20main.ts%20%28or%20the%20file%20where%20you,%27.%2Fapp.module%27%3B%20import%20%7B%20DocumentBuilder%2C%20SwaggerModule%20%7D%20from%20%27%40nestjs%2Fswagger%27%3B)
- [Prisma Migrate](https://www.prisma.io/docs/orm/prisma-migrate/getting-started)
