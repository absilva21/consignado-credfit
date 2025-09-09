import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Empresa {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column()
    cnpj:string;
    @Column()
    razaoSocial:string;
}
