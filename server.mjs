import express from 'express';
import { obtenerTodosLosSuperheroes, obtenerSuperheroePorIdController, agregarNuevoSuperheroe, actualizarSuperheroePorId, eliminarSuperheroePorId, obtenerSuperheroesMayoresDe30YConFiltrosController} from './controllers/superheroesController.mjs';

const app = express();
app.use(express.json());

app.get('/superheroes', obtenerTodosLosSuperheroes);
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.post('/superheroes', agregarNuevoSuperheroe);
app.put('/superheroes/:id', actualizarSuperheroePorId);
app.delete('/superheroes/:id', eliminarSuperheroePorId);
app.get('/superheroes/filtros/avanzados', obtenerSuperheroesMayoresDe30YConFiltrosController);
app.listen(3005, () => {
    console.log('Servidor corriendo en el puerto 3005');
});

