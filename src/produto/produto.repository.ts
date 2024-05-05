import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private produtos = [];

  listaTodos() {
    return this.produtos;
  }

  salva(dadosProduto: any) {
    this.produtos.push(dadosProduto);
  }
}
