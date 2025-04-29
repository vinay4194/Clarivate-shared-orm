# MyStore Shared ORM Library

This repository contains the shared ORM entities and database connection logic for the MyStore application.

## Tech Stack

-  TypeScript
-  TypeORM
-  PostgreSQL (also compatible with MySQL)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vinay4194/mystore-shared-orm.git
   cd mystore-shared-orm
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npx tsc
   ```

## Exports available:

-  Product Entity
-  Category Entity
-  AppDataSource Database connection

## Usage in Backend:

```typescript
import { Product, Category, AppDataSource } from "mystore-shared-orm";
```

## Prerequisites

-  Node.js installed (>= 16.x)
-  TypeScript installed globally or locally
