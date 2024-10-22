import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  standard(): string {
    return 'standard get';
  }

  @Get(':nome')
  helloNome(@Param('nome') nome: string): string {
    return `Olá ${nome}`;
  }

  // crie um metodo post que no body contenha nome e mensagem. Retorne na tela o nome e mensagem.
  @Post()
  message(@Body() body: { name: string; message: string }): string {
    return `
    Nome: ${body.name}
    Mensagem: ${body.message}
    `;
  }
}
