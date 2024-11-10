import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PagamentosService } from './pagamentos.service';
import { Pagamento } from './pagamento.entity';

@Controller('pagamentos')
export class PagamentosController {
  constructor(private readonly pagamentosService: PagamentosService) {}

  @Get()
  findAll() {
    return this.pagamentosService.findAll();
  }

  @Post()
  create(@Body() pagamento: Pagamento) {
    return this.pagamentosService.create(pagamento);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedPagamento: Pagamento) {
    return this.pagamentosService.update(id, updatedPagamento);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.pagamentosService.delete(id);
  }
}
