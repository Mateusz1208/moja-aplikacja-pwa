const path = require('path');

module.exports = {
    entry: './script.js', // Ścieżka do głównego pliku JS
    output: {
        filename: 'bundle.js', // Nazwa wyjściowego pliku
        path: path.resolve(__dirname, 'dist'), // Folder, do którego zapisane będą pliki
    },
    mode: 'development', // Dodaj tę linię, aby ustawić tryb na development
};