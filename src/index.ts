import { AppDataSource } from "./config/database.config";

AppDataSource.initialize()
	.then(() => {
		console.log("Database connected successfully!");
	})
	.catch((error) => {
		console.error("Error connecting to database", error);
	});
