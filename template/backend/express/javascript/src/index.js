// src/index.js
// ─────────────────────────────────────────────────────────────
// Entry point of the application.
// Loads environment variables, imports the Express app,
// and starts the HTTP server.
//
// NOTE: 'dotenv/config' must be imported first so that
//       process.env variables are available everywhere.
// ─────────────────────────────────────────────────────────────

import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV}`);
});
