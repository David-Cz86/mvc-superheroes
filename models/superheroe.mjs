export default class Superheroe {
    constructor(id, nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos) {
        this.id = id;
        this.nombreSuperHeroe = nombreSuperHeroe;
        this.nombreReal = nombreReal;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poderes = poderes || [];
        this.aliados = aliados || [];
        this.enemigos = enemigos || [];
    }

    agregarPoder(poder) {
        this.poderes.push(poder);
    }

    agregarAliado(aliado) {
        this.aliados.push(aliado);
    }

    agregarEnemigo(enemigo) {
        this.enemigos.push(enemigo);
    }
}
