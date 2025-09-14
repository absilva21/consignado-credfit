import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, Entity, PrimaryGeneratedColumn, Index,OneToOne,
    JoinColumn, } from 'typeorm';

@Entity()
export class Empresa {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Index({unique: true})
    @Column()
    cnpj:string;
    @Column()
    razaoSocial:string;
    @OneToOne(type => Usuario ,()=>Usuario,{cascade:true})
    @JoinColumn()
    representante:Usuario;
}
