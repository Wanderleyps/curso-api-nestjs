import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable() //transformando em um provider
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  async salvar(usuario: UsuarioEntity) {
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

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error('Usuário não existe');
    }

    // Itera sobre as entradas do objeto dadosDeAtualizacao
    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      // Ignora a atualização do campo 'id'
      if (chave === 'id') {
        return;
      }

      // Atualiza o campo correspondente no usuário encontrado com o novo valor
      possivelUsuario[chave] = valor;
    });

    return possivelUsuario;
  }
}
