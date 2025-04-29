"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_config_1 = require("./config/database.config");
database_config_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected successfully!");
})
    .catch((error) => {
    console.error("Error connecting to database", error);
});
