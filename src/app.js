import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import projectRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

// Middlewares
app.use(morgan("dev"));
// Whenever data is sent in JSON format the server will be able to interpret it and save sit as a req.body, req.body being the data that is sent in the request from the client
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

export default app;
