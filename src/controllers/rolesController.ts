import { Request, Response } from "express"; // Importamos request y response para typar las respuestas del servidor
import { container } from "tsyringe"; //Importamos nuestro contenedor de dependecias
import RolesRepository from "../repositories/rolesRepository";

export default class RolController{
    static async getAllUsers(_: Request, res: Response){
        const _service = container.resolve(RolesRepository)
        
        try {
            const users = await _service.findAllRoles();

            if(!users){
                throw new Error('Roles not found')
            }
            
            res.status(200).json({ 
                status: 200,
                data: users
            })
        } catch (err) {
            res.status(404).json({ 
                status: 404,
                data: err
            })   
        }
    }

    static async createRol(req: Request, res: Response){
        const _service = container.resolve(RolesRepository)
        const data = req.body

        try {
            const rol = _service.createRol(data)  
            
            res.status(200).json({ 
                status: 201,
                data: rol
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }
}