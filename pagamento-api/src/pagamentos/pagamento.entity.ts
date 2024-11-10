import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valor: number;

  @Column()
  moeda: string;

  @Column()
  status: string;
}
