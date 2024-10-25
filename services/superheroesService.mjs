import SuperheroesRepository from '../persistence/superheroesRepository.mjs';

const repository = new SuperheroesRepository();

export function obtenerSuperheroes() {
    return repository.obtenerTodos();
}

export function obtenerSuperheroePorId(id) {
    const heroes = repository.obtenerTodos();
    return heroes.find(hero => hero.id === id);
}

export function agregarSuperheroe(superheroe) {
    const heroes = repository.obtenerTodos();
    heroes.push(superheroe);
    repository.guardar(heroes);
}
export function actualizarSuperheroe(id, datosActualizados) {
    const heroes = repository.obtenerTodos(); 
    const index = heroes.findIndex(hero => hero.id === id);     
    if (index !== -1) {
        Object.assign(heroes[index], datosActualizados);  
        repository.guardar(heroes);  
        return true;
    }
    return false;
}
export function eliminarSuperheroe(id) {
    const heroes = repository.obtenerTodos();  
    const index = heroes.findIndex(hero => hero.id === id); 
    if (index !== -1) {
        heroes.splice(index, 1);  
        repository.guardar(heroes); 
        return true;
    }
    return false;
}
export function obtenerSuperheroesMayoresDe30YConFiltros() {
    const heroes = repository.obtenerTodos();
    return heroes.filter(hero => hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poderes.length > 2);
}
