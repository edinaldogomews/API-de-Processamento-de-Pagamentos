import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagamentosService } from './pagamentos.service';
import { PagamentosController } from './pagamentos.controller';
import { Pagamento } from './pagamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento])],
  providers: [PagamentosService],
  controllers: [PagamentosController],
})
export class PagamentosModule {}
