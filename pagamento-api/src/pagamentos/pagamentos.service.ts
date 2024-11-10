import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pagamento } from './pagamento.entity';

@Injectable()
export class PagamentosService {
  constructor(
    @InjectRepository(Pagamento)
    private pagamentosRepository: Repository<Pagamento>,
  ) {}

  findAll(): Promise<Pagamento[]> {
    return this.pagamentosRepository.find();
  }

  create(pagamento: Pagamento): Promise<Pagamento> {
    return this.pagamentosRepository.save(pagamento);
  }

  async update(id: number, updatedPagamento: Pagamento): Promise<Pagamento> {
    await this.pagamentosRepository.update(id, updatedPagamento);
    return this.pagamentosRepository.findOneBy({ id });
  }

  delete(id: number): Promise<void> {
    return this.pagamentosRepository.delete(id).then(() => undefined);
  }
}
