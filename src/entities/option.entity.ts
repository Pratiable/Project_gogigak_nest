import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductsOptions } from './products-options.entity';

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', length: 2000 })
  name: string;

  @OneToMany(() => ProductsOptions, (productsOptions) => productsOptions.option)
  productsOptions: ProductsOptions[];
}
