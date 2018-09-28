const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input : item.input,
    output : item.output
}));

network.train(trainingData,{
    iterations : 100
});

const output = network.run("Jobless Claims fell to their lowest level in 49 years!");


console.log(`Person: ${output}`);