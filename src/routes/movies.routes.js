import { Router } from "express"
import { MoviesController } from "../controllers/MoviesController.js"

export const moviesRoutes = Router()

const moviesController = new MoviesController()

moviesRoutes.post("/:user_id", moviesController.create)
moviesRoutes.get("/:id", moviesController.show)
moviesRoutes.delete("/:id", moviesController.delete)
moviesRoutes.get("/", moviesController.index)