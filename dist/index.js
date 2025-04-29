"use strict";
// import { AppDataSource } from "./config/database.config";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// AppDataSource.initialize()
// 	.then(() => {
// 		console.log("Database connected successfully!");
// 	})
// 	.catch((error) => {
// 		console.error("Error connecting to database", error);
// 	});
__exportStar(require("./entities/Product"), exports);
__exportStar(require("./entities/Category"), exports);
__exportStar(require("./config/database.config"), exports);
