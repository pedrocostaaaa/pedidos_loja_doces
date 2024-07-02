import mysql from "mysql2"
import config from "../config.js"

class cpedidosmodel {
    constructor() {
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }


    create(id_pedido, descrição_pedido, valor_total) {
        let sql = `insert into cadastro_pedidos (id_pedido,descrição_pedido,valor_total) values("${id_pedido}","${descrição_pedido}","${valor_total}");`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    console.debug(erro)
                    reject([400, erro])
                }
                resolve([201, "Pedido inserido"])
            })
        });
    }

    read() {
        let sql = `select * from cadastro_pedidos;`
        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    console.debug(erro)
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        });
    }

    update(id_pedido, descrição_pedido, valor_total) {
        let sql = `update cadastro_pedidos set id_pedido="${id_pedido}", descrição_pedido="${descrição_pedido}", valor_total"${valor_total}";`
        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    console.debug(erro)
                    reject([400, erro])
                }
                resolve([200, "Pedido atualizado"])
            })
        });
    }

    delete(id_pedido, descrição_pedido, valor_total) {
        let sql = `delete from cadastro_pedidos where id_pedido="${id_pedido}", descrição_pedido ="${descrição_pedido}", valor_total ="${valor_total}";`
        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    console.debug(erro)
                    reject([400, erro])
                }
                resolve([200, "Pedido deletado"])
            })
        });
    }
}


export default new cpedidosmodel();