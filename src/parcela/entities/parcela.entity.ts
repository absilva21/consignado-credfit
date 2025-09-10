import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Parcela {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column()
    valor:number;
    @Column()
    vencimento:Date;
}
