import { injectable } from "tsyringe";
import Entities from "../models/entitiesModel";

@injectable()
export default class EntitiesRepository{
    async findAllRoles(){
        return await Entities.findAll() //Trae todos las entidades que esten en la base de datos
    }

    async findById(id: number){
        return await Entities.findByPk(id) //Encontramos una entidad por su id
    }

    async createRol(entitie: Partial<Entities>){ //Creamos una nueva entidad
        return await Entities.create(entitie)
    }
}