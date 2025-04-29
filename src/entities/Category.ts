import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity({ name: "categories" })
export class Category {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	categoryName: string;

	@Column()
	description: string;

	@Column({ default: true })
	isActive: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToMany(() => Product, (product) => product.category)
	products: Product[];
}
