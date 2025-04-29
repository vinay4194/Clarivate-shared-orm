import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { Category } from "./Category";

@Entity({ name: "products" })
export class Product {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	productName: string;

	@Column()
	description: string;

	@Column("decimal")
	price: number;

	@Column("int")
	stockQuantity: number;

	@Column()
	categoryId: number;

	@ManyToOne(() => Category, (category) => category.products)
	@JoinColumn({ name: "categoryId" })
	category: Category;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
