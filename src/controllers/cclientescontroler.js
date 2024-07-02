import cclientesmodel from "../models/cclientesmodel.js";

class cclientescontroler{
    constructor(){


    }

    create(req,res){
        const nome_cliente = req.body.nome_cliente
        const id_cliente = req.body.id_cliente
        cclientesmodel.create(nome_cliente,id_cliente).then(
            resposta =>{
                console.debug("Cadastrando cliente")
                res.status(resposta[0].json(resposta[1]))
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao cadastrar cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        cclientesmodel.create().then(
            resposta =>{
                console.debug("Exibindo clientes")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao exibir clientes")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_cliente = req.params.id_cliente
        const nome_cliente = req.body.nome_cliente
        cclientesmodel.update(id_cliente,nome_cliente).then(
            resposta =>{
                console.debug("Atualizando clientes")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro ao atualizar clientes")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_cliente = req.params.id_cliente
        const nome_cliente = req.params.nome_cliente
        cclientesmodel.update(id_cliente,nome_cliente).then(
            resposta =>{
                console.debug("Deletando registros do cliente")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Deletando registros do cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new cclientescontroler()