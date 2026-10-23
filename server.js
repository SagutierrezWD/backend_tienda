import express from "express"
import "dotenv/config"
import cors from "cors"

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;

        this.middlewares()

        this.routes()
    }

    routes() {
        this.app.get(`/test`, (req, res) => {
            res.send({
                message: "Hola mundo desde el servidor"
            })
        })

        this.app.get(`/api`, (req, res) => {
            res.send({
                msg: "GET - Server"
            })
        })

        this.app.post(`/api`, (req, res) => {
            res.send({
                msg: "POST - Server"
            })
        })
        
        this.app.put(`/api`, (req, res) => {
            res.send({
                msg: "PUT - Server"
            })
        })
        
        this.app.delete(`/api`, (req, res) => {
            res.send({
                msg: "DELETE - Server"
            })
        })
    }

    // Método 3 de mi clase Server
    middlewares() {
        this.app.use(cors())
        this.app.use(express.static("public"));
        this.app.use(express.json())
    }

    // Primer Metodo de mi Clase Server
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        })
    }
}

export default Server;