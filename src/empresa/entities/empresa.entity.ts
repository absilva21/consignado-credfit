import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Empresa {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Index({unique: true})
    @Column()
    cnpj:string;
    @Column()
    razaoSocial:string;
}
