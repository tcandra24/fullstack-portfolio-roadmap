# 🚀 Express + JavaScript + Prisma + Yup

Production-ready Express scaffolding with ES Modules, Prisma ORM, Yup validation, and Nodemon hot-reload.

---

## 📁 Folder Structure

```
express-app/
├── prisma/
│   └── schema.prisma               # Prisma data model & DB config
├── src/
│   ├── config/
│   │   └── prisma.js               # Prisma Client singleton
│   ├── controllers/
│   │   └── user.controller.js      # HTTP handlers (req/res only)
│   ├── middlewares/
│   │   ├── validate.middleware.js  # Yup schema validator factory
│   │   ├── error.middleware.js     # Global error handler (500)
│   │   └── notFound.middleware.js  # 404 catch-all
│   ├── prisma/
│   │   └── seed.js                 # DB seeder script
│   ├── routes/
│   │   └── user.routes.js          # Route definitions + middleware wiring
│   ├── services/
│   │   └── user.service.js         # Business logic + Prisma DB calls
│   ├── utils/
│   │   └── response.js             # sendSuccess / sendError helpers
│   ├── validations/
│   │   └── user.validation.js      # Yup schemas per resource
│   ├── app.js                      # Express app setup + middleware + routes
│   └── index.js                    # Server entry point (listens on PORT)
├── .env.example                    # Environment variable template
├── .gitignore
├── nodemon.json                    # Nodemon watch config
└── package.json
```

---

## ⚙️ Setup & Installation

Follow these steps **in order**.

### 1. Clone & enter the project

```bash
git clone <your-repo-url>
cd express-app
```

### 2. Install dependencies

```bash
npm install
```

> **What this installs:**
> - `express` — HTTP server framework
> - `@prisma/client` — Generated Prisma DB client (runtime)
> - `yup` — Schema-based request validation
> - `dotenv` — Loads `.env` variables into `process.env`
>
> **Dev dependencies:**
> - `nodemon` — Restarts server automatically on file changes
> - `prisma` — Prisma CLI for migrations, codegen, and studio

---

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and set your database connection:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://user:password@localhost:5432/express_db"
```

> **Supported Prisma providers & URL formats:**
> | Provider     | Example URL |
> |---|---|
> | PostgreSQL   | `postgresql://user:pass@localhost:5432/db` |
> | MySQL        | `mysql://user:pass@localhost:3306/db` |
> | SQLite       | `file:./dev.db` ← no server needed, great for local dev |
> | SQL Server   | `sqlserver://localhost:1433;database=db;user=sa;password=pass` |

---

### 4. Generate Prisma Client

```bash
npm run prisma:generate
```

> **NOTE:** This reads `prisma/schema.prisma` and generates the type-safe
> Prisma Client in `node_modules/@prisma/client`.
> **Re-run this every time you edit the schema.**

---

### 5. Run database migrations

```bash
npm run prisma:migrate
```

> **NOTE:** Creates the actual tables in your DB based on the Prisma schema.
> You'll be prompted to name the migration (e.g. `init`).
> A `prisma/migrations/` folder is created — **commit this to git**.

---

### 6. (Optional) Seed the database

```bash
npm run prisma:seed
```

> Populates the DB with sample data from `src/prisma/seed.js`.

---

### 7. Start development server

```bash
npm run dev
```

> Nodemon watches `src/**/*.js` and restarts on every change.
> Server runs at: **http://localhost:3000**

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server with hot-reload (nodemon) |
| `npm run start` | Start production server |
| `npm run prisma:generate` | Regenerate Prisma Client after schema changes |
| `npm run prisma:migrate` | Apply pending DB migrations |
| `npm run prisma:studio` | Open Prisma Studio (visual DB browser) |
| `npm run prisma:seed` | Seed the database with sample data |

---

## 🔌 API Endpoints

Base URL: `http://localhost:3000/api/v1`

| Method | Endpoint | Description | Body |
|---|---|---|---|
| `GET` | `/health` | Health check | — |
| `GET` | `/users` | List all users | — |
| `GET` | `/users/:id` | Get user by ID | — |
| `POST` | `/users` | Create a user | `{ name, email }` |
| `PUT` | `/users/:id` | Update a user | `{ name?, email? }` |
| `DELETE` | `/users/:id` | Delete a user | — |

### Example — create a user

```bash
curl -X POST http://localhost:3000/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}'
```

### Success response

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z"
  }
}
```

### Validation error response

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Must be a valid email address",
    "name": "Name is required"
  }
}
```

---

## 💡 ES Modules Note

This project uses `"type": "module"` in `package.json`, which means:
- All files use `import`/`export` syntax (no `require`)
- All local imports **must include the `.js` extension** (e.g. `import x from './x.js'`)
- `__dirname` and `__filename` are not available — use `import.meta.url` instead if needed

---

## ➕ Adding a New Resource

Follow this pattern to add any new resource (e.g. `Post`):

1. **Schema** → Add model to `prisma/schema.prisma`, run `prisma:migrate` then `prisma:generate`
2. **Validation** → Create `src/validations/post.validation.js` with Yup schemas
3. **Service** → Create `src/services/post.service.js` with Prisma calls
4. **Controller** → Create `src/controllers/post.controller.js` with request handlers
5. **Routes** → Create `src/routes/post.routes.js`, wire validate + controller
6. **Register** → Mount in `src/app.js`: `app.use('/api/v1/posts', postRoutes)`

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| **Express** | HTTP server & routing |
| **JavaScript (ESM)** | ES Modules — `import`/`export` |
| **Prisma** | Type-safe ORM & migrations |
| **Yup** | Request body/params validation |
| **Nodemon** | Dev hot-reload |
| **dotenv** | Environment variable loading |
