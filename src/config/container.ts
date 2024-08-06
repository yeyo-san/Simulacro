//Importamos container de tsyringe para almacenar y inyectar nuestras dependecias mas adelante en los servicios y controladores
import { container } from "tsyringe";
import UserRepository from "../repositories/userRepository.";
import OrdersRepository from "../repositories/orderRepository";
import ProductCartRepository from "../repositories/productCartRepository";
import ProductsRepository from "../repositories/productsRepository";
import RolesRepository from "../repositories/rolesRepository";
import EntitiesRepository from "../repositories/entitiesRepository";

//Instanciamos cada una de ellas una vez
container.registerSingleton<UserRepository>(UserRepository)
container.registerSingleton<OrdersRepository>(OrdersRepository)
container.registerSingleton<ProductCartRepository>(ProductCartRepository)
container.registerSingleton<ProductsRepository>(ProductsRepository)
container.registerSingleton<RolesRepository>(RolesRepository)
container.registerSingleton<EntitiesRepository>(EntitiesRepository)



