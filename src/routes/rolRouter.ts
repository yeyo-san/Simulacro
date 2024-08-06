import { Router } from "express";
import RolController from "../controllers/rolesController";

const rolRouter = Router()

rolRouter.get('/', RolController.getAllUsers)
rolRouter.post('/', RolController.createRol)

export default rolRouter