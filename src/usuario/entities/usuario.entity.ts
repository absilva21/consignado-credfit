import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    nome: string;
    @Column()
    cpf: string;
    @Column()
    email: string;
    @Column()
    senha: string;

}
