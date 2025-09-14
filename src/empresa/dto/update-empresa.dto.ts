import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpresaDto } from './create-empresa.dto';
import { Usuario } from 'src/usuario/entities/usuario.entity';

export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {
    cnpj:string;
    razaoSocial:string;
    representante: Usuario;
}
