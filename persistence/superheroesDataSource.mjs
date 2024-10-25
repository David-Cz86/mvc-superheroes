import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../superheroes.txt');

export function obtenerDatos() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([])); // Crear el archivo si no existe
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

export function guardarDatos(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
