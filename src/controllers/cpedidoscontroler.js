import cpedidosmodel from "../models/cpedidosmodel";

class cpedidoscontroler {
    constructor() {


    }

    create(req, res) {
        const descrição_pedido = req.body.descrição_pedido
        const id_pedido = req.body.id_pedido
        const valor_total = req.body.valor_total
        cpedidosmodel.create(descrição_pedido, id_pedido,valor_total).then(
            resposta => {
                console.debug("Cadastrando um pedido")
                res.status(resposta[0].json(resposta[1]))
            }

        ).catch(
            resposta => {
                console.debug(resposta)
                console.debug("Erro ao cadastrar pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req, res) {
        cpedidosmodel.create().then(
            resposta => {
                console.debug("Exibindo pedidos")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta => {
                console.debug(resposta)
                console.debug("Erro exibir pedidos")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        const id_pedido = req.params.id_pedido
        const descrição_pedido = req.body.descrição_pedido
        const valor_total = req.body.valor_total
        cpedidosmodel.update(id_pedido, descrição_pedido, valor_total).then(
            resposta => {
                console.debug("Atualizando pedidos")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta => {
                console.debug(resposta)
                console.debug("Erro ao atualizar pedidos")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req, res) {
        const id_pedido = req.params.id_pedido
        const descrição_pedido = req.params.descrição_pedido
        const valor_total = req.params.valor_total
        cpedidosmodel.update(id_pedido,descrição_pedido,valor_total).then(
            resposta => {
                console.debug("Deletando pedido")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta => {
                console.debug(resposta)
                console.debug("Erro ao deletar pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new cpedidoscontroler()