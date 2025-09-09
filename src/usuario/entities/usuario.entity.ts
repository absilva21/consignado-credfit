import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    nome: string;
    @Index({unique: true})
    @Column()
    cpf: string;
    @Column()
    email: string;
    @Column()
    senha: string;

}
