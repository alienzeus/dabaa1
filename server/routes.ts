import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Static site only needs basic routes for serving the frontend
  // All routing is handled by the frontend router

  const httpServer = createServer(app);
  return httpServer;
}