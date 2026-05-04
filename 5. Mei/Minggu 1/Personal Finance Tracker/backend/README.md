# 🚀 Express + TypeScript + Prisma + Yup

Production-ready Express scaffolding with TypeScript, Prisma ORM, Yup validation, and Nodemon hot-reload.

---

## 📁 Folder Structure

```
express-app/
├── prisma/
│   └── schema.prisma          # Prisma data model & DB config
├── src/
│   ├── config/
│   │   └── prisma.ts          # Prisma Client singleton
│   ├── controllers/
│   │   └── user.controller.ts # HTTP handlers (req/res only)
│   ├── middlewares/
│   │   ├── validate.middleware.ts  # Yup schema validator factory
│   │   ├── error.middleware.ts     # Global error handler (500)
│   │   └── notFound.middleware.ts  # 404 catch-all
│   ├── prisma/
│   │   └── seed.ts            # DB seeder script
│   ├── routes/
│   │   └── user.routes.ts     # Route definitions + middleware wiring
│   ├── services/
│   │   └── user.service.ts    # Business logic + Prisma DB calls
│   ├── types/
│   │   └── index.ts           # Shared TypeScript interfaces
│   ├── utils/
│   │   └── response.ts        # sendSuccess / sendError helpers
│   ├── validations/
│   │   └── user.validation.ts # Yup schemas per resource
│   ├── app.ts                 # Express app setup + middleware + routes
│   └── index.ts               # Server entry point (listens on PORT)
├── .env.example               # Environment variable template
├── .gitignore
├── nodemon.json               # Nodemon watch config
├── package.json
└── tsconfig.json
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
> - `@prisma/client` — Generated Prisma DB client
> - `yup` — Schema validation
> - `dotenv` — Loads `.env` into `process.env`
> - `http-status-codes` — Named HTTP status constants
>
> **Dev dependencies:**
> - `typescript`, `ts-node` — TypeScript compiler + runtime
> - `nodemon` — Hot-reload on file changes
> - `prisma` — Prisma CLI (migrations, codegen, studio)
> - `@types/*` — TypeScript type definitions

---

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and fill in your database connection:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://user:password@localhost:5432/express_db"
```

> **Supported Prisma providers:** `postgresql`, `mysql`, `sqlite`, `sqlserver`, `mongodb`
> For SQLite (no external DB needed): `DATABASE_URL="file:./dev.db"`

---

### 4. Generate Prisma Client

```bash
npm run prisma:generate
```

> **NOTE:** This reads `prisma/schema.prisma` and generates the type-safe
> Prisma Client in `node_modules/@prisma/client`.
> **Re-run this every time you change the schema.**

---

### 5. Run database migrations

```bash
npm run prisma:migrate
```

> **NOTE:** This creates the actual tables in your database based on your
> Prisma schema. You'll be prompted to name the migration (e.g. `init`).
> A `prisma/migrations/` folder is created — **commit this to git**.

---

### 6. (Optional) Seed the database

```bash
npm run prisma:seed
```

> Populates the DB with sample data from `src/prisma/seed.ts`.

---

### 7. Start development server

```bash
npm run dev
```

> Nodemon watches `src/**/*.ts` and restarts automatically on changes.
> Server runs at: **http://localhost:3000**

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server with hot-reload (nodemon + ts-node) |
| `npm run build` | Compile TypeScript → `dist/` |
| `npm run start` | Run compiled production build |
| `npm run prisma:generate` | Regenerate Prisma Client after schema changes |
| `npm run prisma:migrate` | Run pending DB migrations |
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

### Example request

```bash
curl -X POST http://localhost:3000/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}'
```

### Example response

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

## ➕ Adding a New Resource

Follow this pattern to add any new resource (e.g., `Post`):

1. **Schema** → Add model to `prisma/schema.prisma`, then run `npm run prisma:migrate` and `npm run prisma:generate`
2. **Validation** → Create `src/validations/post.validation.ts` with Yup schemas
3. **Service** → Create `src/services/post.service.ts` with Prisma calls
4. **Controller** → Create `src/controllers/post.controller.ts` with request handlers
5. **Routes** → Create `src/routes/post.routes.ts` and wire validation + controller
6. **Register** → Mount the router in `src/app.ts` with `app.use('/api/v1/posts', postRoutes)`

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| **Express** | HTTP server & routing |
| **TypeScript** | Static typing |
| **Prisma** | Type-safe ORM & migrations |
| **Yup** | Request body/params validation |
| **Nodemon** | Dev hot-reload |
| **ts-node** | Run TypeScript directly (no build step in dev) |
| **dotenv** | Environment variable loading |
