import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Emprestimo {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column()
    valor:number;
    @Column()
    parcelas:number;
    @CreateDateColumn()
    pedido:Date;
}
