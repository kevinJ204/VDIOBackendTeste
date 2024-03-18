
import { Router } from 'express';
import EventoCtrl from '../Controles/eventoCtrl';

const rotaEvento = new Router();
const evtCtrl = new EventoCtrl();

rotaEvento
.get('/', evtCtrl.consultar)
.get('/:termo', evtCtrl.consultar)
.post('/', evtCtrl.gravar)
.put('/:id', evtCtrl.atualizar)
.patch('/:termo', evtCtrl.atualizar)
.delete('/:id', evtCtrl.excluir);


export default rotaEvento;