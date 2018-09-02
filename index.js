const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();
// subsitituir por twitter e outras app
const treinarDados = data.map(item => ({
    input: item.text,
    output: item.category
}))

network.train(treinarDados, {
    iterations: 2000
})


const output = network.run("Tem uma tela que não funciona");

console.log(`Categoria: ${output}`);