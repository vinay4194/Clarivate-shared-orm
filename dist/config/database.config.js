"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("../entities/Product");
const Category_1 = require("../entities/Category");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres", // Change to 'mysql' if you want
    host: "localhost",
    port: 5432, // Change to 3306 if MySQL
    username: "your_db_username",
    password: "your_db_password",
    database: "MyStore",
    synchronize: false,
    logging: true,
    entities: [Product_1.Product, Category_1.Category],
    migrations: ["src/migrations/*.ts"],
});
