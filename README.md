# 🗃️ MyStore Shared ORM Library

This is the shared ORM module for the MyStore full-stack application.  
It contains database entities and configuration logic for PostgreSQL using **TypeORM** and **TypeScript**.

---

## 📦 Features

-  `Product` and `Category` entities
-  Centralized `AppDataSource` (TypeORM data source configuration)
-  Pre-configured **migration file** to:
   -  Create all necessary tables
   -  Insert default **sample seed data** (3 categories, 3 products)
-  Clean export system to use with external apps (like NestJS backend)

---

## 🧱 Folder Structure

```
my-store-shared-orm/
│
├── src/
│   ├── config/
│   │   └── database.config.ts      // TypeORM connection config
│   ├── entities/
│   │   ├── Product.ts
│   │   └── Category.ts
│   ├── migrations/
│   │   └── <timestamp>-CreateProductsAndCategoriesTables.ts
│   └── index.ts                    // Centralized export
│
├── dist/                           // Compiled JS files (after build)
├── package.json
└── tsconfig.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/vinay4194/mystore-shared-orm.git
cd mystore-shared-orm
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Project

```bash
npm run build
```

---

### 4. ⚠️ Important: Ensure Database Exists

Before running the migration, make sure the PostgreSQL database named **`MyStore`** exists.

You can create it manually using:

```sql
CREATE DATABASE "MyStore";
```

---

### 5. Run Migration to Create Tables and Seed Data

```bash
npm run migration:run
```

This will:

-  Create the `categories` and `products` tables
-  Insert 3 default categories and 3 sample products

✅ This command uses the `src/config/database.config.ts` configuration

---

## 🧪 Optional: Reset Migrations

If needed, revert and re-run migration:

```bash
npm run migration:revert
npm run migration:run
```

---

## 🔄 Exports Available

```ts
import { AppDataSource, Product, Category } from "my-store-shared-orm";
```

-  `AppDataSource` – TypeORM DataSource used in backend
-  `Product` – Product entity
-  `Category` – Category entity

---

## ✅ Prerequisites

-  Node.js ≥ 16.x
-  TypeScript installed globally or locally
-  PostgreSQL installed and running
-  A PostgreSQL database named `MyStore`

---

## 📢 Notes

-  This shared module is meant to be used with your NestJS backend or any other service that needs shared access to ORM logic.
-  Migration and seeding is **automated** via `migration:run` — no need to write SQL manually.
