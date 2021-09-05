import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductsOptions } from './ProductsOptions';

@Entity('options')
export class Options {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', length: 2000 })
  name: string;

  @OneToMany(() => ProductsOptions, (productsOptions) => productsOptions.option)
  productsOptions: ProductsOptions[];
}
