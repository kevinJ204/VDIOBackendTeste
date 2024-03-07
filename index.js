import Evento from "./Modelo/Evento.js";
/*
const evento1 = new Evento(0, "Show da Comédia", 
"O melhor remédio é rir!", new Date("2024-04-13"),
"Vila Ocidental", new Date(2024, 4, 13, 20, 30), new Date(2024, 4, 13, 22, 40), 55.70,
163);

evento1.gravar().then(() =>{
    console.log("Evento gravado com sucesso!");
}).catch((erro) => {
    console.log(erro);
});
*/

/*
const evento2 = new Evento(8, "Show da Comédia", 
"Teste de atualização", new Date("2024-09-20"),
"Vila Mar Azul", new Date(2024, 4, 13, 20, 30), new Date(2024, 4, 13, 22, 40), 65.70,
201);


evento2.atualizar().then(() =>{
    console.log("Evento atualizado com sucesso!");
}).catch((erro) => {
    console.log(erro);
});
*/

/*
const evento3 = new Evento(8, "Show da Comédia", 
"Teste de atualização", new Date("2024-09-20"),
"Vila Mar Azul", new Date(2024, 4, 13, 20, 30), new Date(2024, 4, 13, 22, 40), 65.70,
201);

evento3.excluir().then(() =>{
    console.log("Evento excluído com sucesso!");
}).catch((erro) => {
    console.log(erro);
});
*/

/*
const evento4 = new Evento(0, "Música ao Vivo", 
"cantor: Chitãozinho", new Date("2024-04-13"),
"Vila Ocidental", new Date(2024, 4, 13, 20, 30), new Date(2024, 4, 13, 22, 40), 55.70,
163);

const evento5 = new Evento(0, "Música ao Vivo", 
"cantor: Xororó", new Date("2024-04-13"),
"Vila Ocidental", new Date(2024, 4, 13, 23, 0), new Date(2024, 4, 13, 0, 40), 55.70,
163);

evento4.gravar().then(() =>{
    console.log("Evento gravado com sucesso!");
}).catch((erro) => {
    console.log(erro);
});

evento5.gravar().then(() =>{
    console.log("Evento gravado com sucesso!");
}).catch((erro) => {
    console.log(erro);
});
*/


const eventoQQ = new Evento();

eventoQQ.consultar("Música ao Vivo").then((listaEventos) => {
    console.log("Eventos encontrados:")
    for (const evento of listaEventos) {
        console.log(evento.toJSON());
    }
}).catch((erro) => {
    console.log("Não foi possível consultar o evento", erro);
});
