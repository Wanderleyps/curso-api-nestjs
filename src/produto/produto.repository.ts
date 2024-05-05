import { Injectable } from '@nestjs/common';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';

@Injectable()
export class ProdutoRepository {
  private produtos = [];

  listaTodos() {
    return this.produtos;
  }

  salva(dadosProduto: CriaProdutoDTO) {
    this.produtos.push(dadosProduto);
  }
}
