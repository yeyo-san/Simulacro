//Importamos sequelize para poder configuar nuestra conexion a nuestra base de datos
import { Sequelize } from "sequelize-typescript";
import { UsersModel } from "../models/userModel";
import { ProdcutsModel } from "../models/productModel";
import { RolesTableModel } from "../models/roleModel";
import { CartModel } from "../models/cartModel";
import { OrdersModel } from "../models/orderModel";
import { ProductCartModel } from "../models/productCart";

const sequelizeStart: Sequelize = new Sequelize({
    dialect: 'mysql', //En que dialecto nos comunicaremos con la base
    host: 'localhost', //A que parte atacaremos
    username: 'root', //Username de la base de datos
    password: 'Rlwl2023.', //Contraseña de nuestra base de datos
    database: 'database_prueba', //Nombre de nuestra base de datos
    models: [UsersModel, ProdcutsModel, RolesTableModel, CartModel, OrdersModel, ProductCartModel]
})


// Sincroniza los modelos con la base de datos
 //sequelizeStart.sync({ alter: true }) // Usar `alter: true` para ajustar la base de datos al esquema de modelos
   //  .then(() => {
   //     console.log('Database & tables created or updated!');    })
   //.catch((error) => {
   //   console.error('Error syncing database:', error);
//});

export default sequelizeStart