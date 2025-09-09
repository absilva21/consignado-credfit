import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    
    try{
       return await this.usuarioService.create(createUsuarioDto);
    }catch(error: unknown){

      if(error instanceof Error && error.message==='SQLITE_CONSTRAINT: UNIQUE constraint failed: usuario.cpf'){
        //caso o usuário já esteja cadastrado
        throw new HttpException("usuário já cadastrado", HttpStatus.FORBIDDEN);
        
      }else{
        throw new HttpException('erro desconhecido',HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
     
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }
  
  //busca por cpf
  @Get(':cpf')
  findByCpf(@Param('cpf') cpf: string){
    return this.usuarioService.findBycpf(cpf)
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usuarioService.remove(+id);
  }
}
