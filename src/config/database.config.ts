import { DataSource } from "typeorm";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";

export const AppDataSource = new DataSource({
	type: "postgres", // Change to 'mysql' if you want
	host: "localhost",
	port: 5432, // Change to 3306 if MySQL
	username: "your_db_username",
	password: "your_db_password",
	database: "MyStore",
	synchronize: false,
	logging: true,
	entities: [Product, Category],
	migrations: ["src/migrations/*.ts"],
});
