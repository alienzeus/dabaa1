import express, { type Request, Response, NextFunction } from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

// ES modules fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utility functions
const log = (message: string) => console.log(`[${new Date().toISOString()}] ${message}`);

// Route registration (create routes.ts file)
const registerRoutes = (app: express.Application) => {
  const router = express.Router();
  
  router.get("/api/data", (req: Request, res: Response) => {
    res.json({ message: "Hello from API!" });
  });

  app.use(router);
  return app;
};

// Vite development setup
const setupVite = async (app: express.Application) => {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa"
  });

  app.use(vite.middlewares);
  return vite;
};

// Production static serving
const serveStatic = (app: express.Application) => {
  app.use(express.static(path.resolve(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
  });
};

// Main application setup
const app = express();
app.use(express.json());

// Logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    log(`${req.method} ${req.path} ${res.statusCode} ${duration}ms`);
  });
  next();
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = process.env.NODE_ENV === "production" 
    ? "Something went wrong" 
    : err.message;
  
  res.status(status).json({
    status: "error",
    message,
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack })
  });
});

// Start server
const startServer = async () => {
  try {
    const server = registerRoutes(app);
    
    if (process.env.NODE_ENV === "development") {
      await setupVite(app);
    } else {
      serveStatic(app);
    }

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, "0.0.0.0", () => {
      log(`Server running in ${process.env.NODE_ENV || "development"} mode`);
      log(`Listening on port ${PORT}`);
    });

  } catch (err) {
    log(`Failed to start server: ${err}`);
    process.exit(1);
  }
};

startServer();