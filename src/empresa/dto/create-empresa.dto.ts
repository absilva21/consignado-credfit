import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateEmpresaDto {
    cnpj:string;
    razaoSocial:string;
    representante:Usuario;
}
