// src/types/index.ts
// ─────────────────────────────────────────────────────────────
// Shared TypeScript types and interfaces.
// Add domain-specific types here and import where needed.
// ─────────────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: unknown;
}

export interface PaginationQuery {
  page?: number;
  limit?: number;
}
