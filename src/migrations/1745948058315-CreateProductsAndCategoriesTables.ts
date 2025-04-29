import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductsAndCategoriesTables1745948058315 implements MigrationInterface {
	name = "CreateProductsAndCategoriesTables1745948058315";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
      CREATE TABLE "categories" (
        "id" SERIAL PRIMARY KEY,
        "categoryName" VARCHAR NOT NULL,
        "description" VARCHAR NOT NULL,
        "isActive" BOOLEAN DEFAULT true,
        "createdAt" TIMESTAMP DEFAULT now(),
        "updatedAt" TIMESTAMP DEFAULT now()
      )
    `);

		await queryRunner.query(`
      CREATE TABLE "products" (
        "id" SERIAL PRIMARY KEY,
        "productName" VARCHAR NOT NULL,
        "description" VARCHAR NOT NULL,
        "price" DECIMAL NOT NULL,
        "stockQuantity" INTEGER NOT NULL,
        "categoryId" INTEGER NOT NULL,
        "createdAt" TIMESTAMP DEFAULT now(),
        "updatedAt" TIMESTAMP DEFAULT now(),
        CONSTRAINT "FK_categoryId" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE CASCADE
      )
    `);

		await queryRunner.query(`
      INSERT INTO "categories" ("categoryName", "description", "isActive")
      VALUES
        ('Electronics', 'Devices like phones and laptops', true),
        ('Furniture', 'Home and office furniture', true),
        ('Books', 'Educational and fiction books', true)
    `);

		await queryRunner.query(`
      INSERT INTO "products" ("productName", "description", "price", "stockQuantity", "categoryId")
      VALUES
        ('Laptop', 'Dell Inspiron 15', 55000.00, 10, 1),
        ('Office Chair', 'Ergonomic mesh chair', 4500.00, 15, 2),
        ('JavaScript Book', 'Learn JavaScript from scratch', 1200.00, 20, 3)
    `);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "products"`);
		await queryRunner.query(`DROP TABLE "categories"`);
	}
}
