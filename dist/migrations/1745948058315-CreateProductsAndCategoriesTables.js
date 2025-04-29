"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductsAndCategoriesTables1745948058315 = void 0;
class CreateProductsAndCategoriesTables1745948058315 {
    constructor() {
        this.name = "CreateProductsAndCategoriesTables1745948058315";
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
      CREATE TABLE "categories" (
        "id" SERIAL PRIMARY KEY,
        "categoryName" VARCHAR NOT NULL,
        "description" VARCHAR NOT NULL,
        "isActive" BOOLEAN DEFAULT true,
        "createdAt" TIMESTAMP DEFAULT now(),
        "updatedAt" TIMESTAMP DEFAULT now()
      )
    `);
            yield queryRunner.query(`
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
            yield queryRunner.query(`
      INSERT INTO "categories" ("categoryName", "description", "isActive")
      VALUES
        ('Electronics', 'Devices like phones and laptops', true),
        ('Furniture', 'Home and office furniture', true),
        ('Books', 'Educational and fiction books', true)
    `);
            yield queryRunner.query(`
      INSERT INTO "products" ("productName", "description", "price", "stockQuantity", "categoryId")
      VALUES
        ('Laptop', 'Dell Inspiron 15', 55000.00, 10, 1),
        ('Office Chair', 'Ergonomic mesh chair', 4500.00, 15, 2),
        ('JavaScript Book', 'Learn JavaScript from scratch', 1200.00, 20, 3)
    `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "products"`);
            yield queryRunner.query(`DROP TABLE "categories"`);
        });
    }
}
exports.CreateProductsAndCategoriesTables1745948058315 = CreateProductsAndCategoriesTables1745948058315;
