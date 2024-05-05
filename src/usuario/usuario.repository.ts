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

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }
}
