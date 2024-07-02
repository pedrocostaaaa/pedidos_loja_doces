import mysql from "mysql2"
import config from "../config.js"

class cclientesmodel {
    constructor() {
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }


    create(nome_cliente,id_cliente){
        let sql = `insert into cadastro_clientes (nome_cliente,id_cliente) values("${nome_cliente}","${id_cliente}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Cliente inserido"])
            })
        });
    }

    read(){
        let sql = `select * from cadastro_clientes;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }

    update(id_cliente,nome_cliente){
        let sql = `update cadastro_clientes set id_cliente="${id_cliente}" where nome_cliente="${nome_cliente}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Atualizado"])
            })
        });
    }

    delete(id_cliente,nome_cliente){
        let sql = `delete from cadastro_clientes where id_cliente="${id_cliente}"  where nome_cliente="${nome_cliente}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Deletado"])
            })
        });
    }
}






export default new cclientesmodel();