import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { EmpresaModule } from './empresa/empresa.module';

@Module({
  imports: [UsuarioModule, TypeOrmModule.forRoot(config), EmpresaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
