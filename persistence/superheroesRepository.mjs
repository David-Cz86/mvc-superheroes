import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta actual sin usar __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../superheroes.txt');

export default class SuperheroesRepository {
    obtenerTodos() {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }

    guardar(data) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }
}
