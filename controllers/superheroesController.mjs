import { obtenerSuperheroes, obtenerSuperheroePorId, agregarSuperheroe, actualizarSuperheroe, eliminarSuperheroe, obtenerSuperheroesMayoresDe30YConFiltros} from '../services/superheroesService.mjs';
import { renderizarListaSuperheroes, renderizarSuperheroe } from '../views/responseView.mjs';

export function obtenerTodosLosSuperheroes(req, res) {
    const heroes = obtenerSuperheroes();
    res.send(renderizarListaSuperheroes(heroes));
}

export function obtenerSuperheroePorIdController(req, res) {
    const id = parseInt(req.params.id, 10);
    const hero = obtenerSuperheroePorId(id);
    hero ? res.send(renderizarSuperheroe(hero)) : res.status(404).send("Superhéroe no encontrado");
}

export function agregarNuevoSuperheroe(req, res) {
    const nuevoHeroe = req.body;
    agregarSuperheroe(nuevoHeroe);
    res.send("Superhéroe agregado");
}
export function actualizarSuperheroePorId(req, res) {
    const id = parseInt(req.params.id, 10);  
    const datosActualizados = req.body;  
    const exito = actualizarSuperheroe(id, datosActualizados);  
    exito ? res.send('Superhéroe actualizado') : res.status(404).send('Superhéroe no encontrado');
}
export function eliminarSuperheroePorId(req, res) {
    const id = parseInt(req.params.id, 10);  
    const exito = eliminarSuperheroe(id);  
    exito ? res.send('Superhéroe eliminado') : res.status(404).send('Superhéroe no encontrado');
}
export function obtenerSuperheroesMayoresDe30YConFiltrosController(req, res) {
     const heroesFiltrados = obtenerSuperheroesMayoresDe30YConFiltros();  
     res.send(heroesFiltrados);
}
