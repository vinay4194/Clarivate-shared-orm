// import { AppDataSource } from "./config/database.config";

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

export { AppDataSource } from "./config/database.config";
export { Product } from "./entities/Product";
export { Category } from "./entities/Category";
