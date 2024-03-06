import conectar from './Conexao.js';
import Evento from '../Modelo/Evento.js';

export default class EventoDAO {
    async gravar(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `INSERT INTO evento (nome, descricao, dia, localEvento, horarioInicio,           horarioFinal, valorIngresso, ingressosTotais) values (?, ?, ?, ?, ?, ?, ?, ?)`;
            const parametros = [
                evento.getNome(),
                evento.getDescricao(),
                evento.getDia(),
                evento.getLocal(),
                evento.getHorarioInicio(),
                evento.getHorarioFinal(),
                evento.getValorIngresso(),
                evento.getIngressosTotais()
            ];
            const [resultados, campos] = await conexao.execute(sql,parametros);
            evento.setId(resultados.insertId);
        }
    }

    async atualizar(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `UPDATE evento SET nome = ?,
                         descricao = ?, dia = ?, localEvento = ?,
                         horarioInicio = ?, horarioFinal = ?, valorIngresso = ?,
                         ingressosTotais = ? WHERE id = ?`;
            const parametros = [
                evento.getNome(),
                evento.getDescricao(),
                evento.getDia(),
                evento.getLocal(),
                evento.getHorarioInicio(),
                evento.getHorarioFinal(),
                evento.getValorIngresso(),
                evento.getIngressosTotais(),
                evento.getId()
            ];

            await conexao.execute(sql,parametros);
        }
    }

    async excluir(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `DELETE FROM evento WHERE id = ?`;
            const parametros = [
                evento.getId()
            ]
            await conexao.execute(sql,parametros);
        }
    }
    
    async consultar(termoDePesquisa){
        if (termoDePesquisa === undefined){
            termoDePesquisa = "";
        }
        let sql="";
        if (isNaN(termoDePesquisa)){
            sql = `SELECT * FROM evento WHERE nome LIKE ?`;
            termoDePesquisa= '%' + termoDePesquisa + '%';
        }
        else{
            sql = `SELECT * FROM evento WHERE id = ?`;
        }

        const conexao = await conectar();
        const [registros] = await conexao.execute(sql,[termoDePesquisa]);
        let listaEventos = [];
        for (const registro of registros){
            const evento = new Evento(
                registro.id,
                registro.nome,
                registro.descricao,
                registro.dia,
                registro.localEvento,
                registro.horarioInicio,
                registro.horarioFinal,
                registro.valorIngresso,
                registro.ingressosTotais
            );
            listaEventos.push(evento);
        }
        return listaEventos;
    }
}