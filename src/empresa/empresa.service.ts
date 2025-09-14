import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Repository } from 'typeorm';
import { Empresa } from './entities/empresa.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmpresaService {

  constructor(@InjectRepository(Empresa)
  private readonly empresaRepository:Repository<Empresa>){

  }
  create(createEmpresaDto: CreateEmpresaDto) {
    return this.empresaRepository.save(createEmpresaDto);
  }

  findAll() {
    return this.empresaRepository.find({
      relations:{
        representante:true
      }
    });
  }

  //busca por cnpj
  findOneCnpj(cnpj:string){
    return this.empresaRepository.findOne({where:{cnpj:cnpj}})
  }

  findOne(id: number) {
    return this.empresaRepository.findOneBy({id});
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaRepository.update(id,updateEmpresaDto);
  }

  remove(id: number) {
    return this.empresaRepository.delete(id);
  }
}
