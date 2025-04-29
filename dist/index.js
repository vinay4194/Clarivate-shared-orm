"use strict";
// import { AppDataSource } from "./config/database.config";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.Product = exports.AppDataSource = void 0;
// AppDataSource.initialize()
// 	.then(() => {
// 		console.log("Database connected successfully!");
// 	})
// 	.catch((error) => {
// 		console.error("Error connecting to database", error);
// 	});
// export * from "./entities/Product";
// export * from "./entities/Category";
// export * from "./config/database.config";
var database_config_1 = require("./config/database.config");
Object.defineProperty(exports, "AppDataSource", { enumerable: true, get: function () { return database_config_1.AppDataSource; } });
var Product_1 = require("./entities/Product");
Object.defineProperty(exports, "Product", { enumerable: true, get: function () { return Product_1.Product; } });
var Category_1 = require("./entities/Category");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return Category_1.Category; } });
