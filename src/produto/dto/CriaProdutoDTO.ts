import {
  IsArray,
  IsNotEmpty,
  IsPositive,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoDTO } from './CaracteristicaProdutoDTO ';
import { ImagemProdutoDTO } from './ImagemProdutoDTO';
import { Type } from 'class-transformer';

export class CriaProdutoDTO {
  @IsNotEmpty()
  nome: string;
  @IsPositive()
  valor: number;
  quantidade: number;
  @IsNotEmpty()
  @MinLength(1000)
  descricao: string;

  @ValidateNested() // validação aninhada ao atributo validado
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];
  imagens: ImagemProdutoDTO[];
  categoria: string;
}
