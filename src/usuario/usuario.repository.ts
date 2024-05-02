import { Injectable } from '@nestjs/common';

@Injectable() //transformando em um provider
export class UsuarioRepository {
  private usuarios = [];
  async salvar(usuario: any) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }
}
