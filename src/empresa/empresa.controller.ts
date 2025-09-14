import { Controller, Get, Post, Body, Patch, Param, Delete,HttpStatus, HttpException  } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  async create(@Body() createEmpresaDto: CreateEmpresaDto) {
   /* try{
      return await this.empresaService.create(createEmpresaDto);
    }catch(error: unknown){
      if(error instanceof Error && error.message==='SQLITE_CONSTRAINT: UNIQUE constraint failed: empresa.cnpj'){
        throw new HttpException("empresa já cadastrada", HttpStatus.FORBIDDEN);
      }else{
        throw new HttpException("erro desconhecido", HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }*/
    return await this.empresaService.create(createEmpresaDto);
  }

  @Get()
  findAll() {
    return this.empresaService.findAll();
  }

  //busca por cnpj
  @Get('cnpj')
  findOneCnpj(@Param('cnpj') cnpj:string){
    return this.empresaService.findOneCnpj(cnpj)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(+id, updateEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresaService.remove(+id);
  }
}
