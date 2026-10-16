import express from "express"
import "dotenv/config"

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;

        this.middlewares()

        this.routes()
    }

    routes() {
        this.app.get(`/`, (req, res) => {
            res.send({
                message: "Hola mundo desde el servidor"
            })
        })
    }

    // Método 3 de mi clase Server
    middlewares() {
        this.app.use(express.static("public"));
    }

    // Primer Metodo de mi Clase Server
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        })
    }
}

export default Server;