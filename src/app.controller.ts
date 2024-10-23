import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  standard(): string {
    return 'standard get';
  }

  @Get(':carro')
  olaCarro(@Param('carro') carro: string): string {
    return `Olá, ${carro}!`;
  }
}
