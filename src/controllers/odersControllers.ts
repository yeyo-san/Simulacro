import { Request, Response } from "express"; // Importamos request y response para typar las respuestas del servidor
import { container } from "tsyringe"; //Importamos nuestro contenedor de dependecias
import OrderServices from "../services/oderServices";//Importamos los servicios

//Controlador que recibira peticiones crud y dara un estado de cara a lo que arroje nuestra peticion
export default class OrderController{
    static async getAllOrders(_: Request, res: Response){
        const _service = container.resolve(OrderServices)
        
        try {
            const order = await _service.getAllOrders();

            if(!order){
                throw new Error('Orders not found')
            }
            
            res.status(200).json({ 
                status: 200,
                data: order
            })
        } catch (err) {
            res.status(404).json({ 
                status: 404,
                data: err
            })   
        }
    }

    static async createOrder( req: Request, res: Response ) {
            const _service = container.resolve(OrderServices)
            const data = req.body
            
            try {
                const product = await _service.createOrders(data);                
                
                res.status(201).json({ 
                    status: 201,
                    message: 'Created successfully',
                    token: product
                })
            } catch (err) {
                res.status(400).json({ 
                    status: 400,
                    data: err
                })   
            }
        }

    static async updateOrder( req: Request, res: Response ){
        const _service = container.resolve(OrderServices)
        const {userId, productCartId, total} = req.body
        const { id } = req.params        
        
        try {
            const order = await _service.updateOrders(parseInt(id), {userId, productCartId, total} );
            
            res.status(200).json({ 
                status: 201,
                data: order
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

     static async deleteOrder ( req: Request, res: Response){
        const _service = container.resolve(OrderServices)

        try {
            const orderDeleted = await _service.deleteOrders(parseInt(req.params.id));
            
            res.status(200).json({ 
                status: 201,
                data: orderDeleted
            })
        } catch (err) {
            res.status(400).json({ 
                status: 400,
                data: err
            })   
        }
    }

}