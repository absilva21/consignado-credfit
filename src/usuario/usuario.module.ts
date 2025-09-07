import { Module } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from './entities/usuario.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {
}
