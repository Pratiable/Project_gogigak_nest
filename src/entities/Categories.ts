import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Products } from './Products';

@Entity('categories')
export class Categories {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('varchar', { name: 'image', length: 2000 })
  image: string;

  @OneToMany(() => Products, (products) => products.category)
  products: Products[];
}
