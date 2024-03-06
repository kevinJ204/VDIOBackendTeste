import EventoDAO from "../Persistencia/EventoDAO.js";

export default class Evento {
    #id;
    #nome;
    #descricao;
    #dia;
    #local;
    #horarioInicio;
    #horarioFinal;
    #valorIngresso;
    #ingressosTotais;

    constructor(id=0, nome="", descricao="", dia=new Date(), local="", horarioInicio=new Date(), horarioFinal=new Date(), valorIngresso=0.00, IngressosTotais=0) {
        this.#id = id;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#dia = dia;
        this.#local = local;
        this.#horarioInicio = horarioInicio;
        this.#horarioFinal = horarioFinal;
        this.#valorIngresso = valorIngresso;
        this.#ingressosTotais = IngressosTotais;
    }

    getId() {
        return this.#id;
    }
    setId(id) {
        this.#id = id;
    }
    getNome() {
        return this.#nome;
    }
    setNome(nome) {
        this.#nome = nome;
    }
    getDescricao() {
        return this.#descricao;
    }
    setDescricao(descricao) {
        this.#descricao = descricao;
    }
    getDia() {
        return this.#dia;
    }
    setDia(dia) {
        this.#dia = dia;
    }
    getLocal() {
        return this.#local;
    }
    setLocal(local) {
        this.#local = local;
    }
    getHorarioInicio() {
        return this.#horarioInicio;
    }
    setHorarioInicio(horarioInicio) {
        this.#horarioInicio = horarioInicio;
    }
    getHorarioFinal() {
        return this.#horarioFinal;
    }
    setHorarioFinal(horarioFinal) {
        this.#horarioFinal = horarioFinal;
    }
    getValorIngresso() {
        return this.#valorIngresso;
    }
    setValorIngresso(valorIngresso) {
        this.#valorIngresso = valorIngresso;
    }
    getIngressosTotais() {
        return this.#ingressosTotais;
    }
    setIngressosTotais(ingressosTotais) {
        this.#ingressosTotais = ingressosTotais;
    }

    async gravar(){
        const dao = new EventoDAO();
        await dao.gravar(this); 
    }

    async atualizar(){
        const dao = new EventoDAO();
        await dao.atualizar(this);
    }

    async excluir(){
        const dao = new EventoDAO();
        await dao.excluir(this);
    }

    async consultar(termoDePesquisa){
        const dao = new EventoDAO();
        return await dao.consultar(termoDePesquisa);
    }

    toString(){
        return `Evento id: ${this.#id} -  nome: ${this.#nome}`;
    }

    toJSON(){
        return {
            "id": this.#id,
            "nome": this.#nome,
            "descricao": this.#descricao,
            "dia": this.#dia,
            "local": this.#local,
            "horarioInicio": this.#horarioInicio,
            "horarioFinal": this.#horarioFinal,
            "valorIngresso": this.#valorIngresso,
            "IngressosTotais": this.#ingressosTotais
        }
    }
}