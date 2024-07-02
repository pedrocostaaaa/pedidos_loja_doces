import express from "express"
import categoriacontroller from "./controllers/cclientescontroler.js"

import docecontroller from "./controllers/cpedidoscontroler.js"
import cclientescontroler from "./controllers/cclientescontroler.js"
import cpedidoscontroler from "./controllers/cpedidoscontroler.js"


const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor funcionando")
})

server.post("/cadastro_clientes",cclientescontroler.create)
server.get("/cadastro_clientes",cclientescontroler.read)
server.put("/cadastro_clientes/:id_cliente",cclientescontroler.update)
server.delete("/cadastro_clientes/:id_cliente",cclientescontroler.delete)

server.post("/cadastro_pedidos",cpedidoscontroler.create)
server.get("/cadastro_pedidos",cpedidoscontroler.read)
server.put("/cadastro_pedidos/:id_pedido",cpedidoscontroler.update)
server.delete("/cadastro_pedidos/:id_pedido",cpedidoscontroler.delete)

server.listen(5000)