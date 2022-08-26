import { Router } from "express";

// After we create each function in our controllers we import them to our routes
import {
  getProjects,
  createProject,
  updateProject,
  getProject,
  deleteProject,
  getProjectTasks,
} from "../controllers/project.controller.js";

const router = Router();

// Routes
router.post("/", createProject);
router.get("/", getProjects);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.get("/:id", getProject);

// To get all the tasks of a certain project, this is our final route
router.get("/:id/tasks", getProjectTasks);

export default router;
