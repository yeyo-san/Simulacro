import { Router } from "express";
import UserController from "../controllers/userController";
import { authenticateJWT } from "../middlewares/authMiddleware";

const userRoutes = Router()

userRoutes.get('/', UserController.getAllUsers)
userRoutes.post('/', UserController.createUser)
userRoutes.post('/login', UserController.login)
userRoutes.put('/:id', authenticateJWT, UserController.updateUser)
userRoutes.delete('/:id', authenticateJWT, UserController.deleteUser)

export default userRoutes
