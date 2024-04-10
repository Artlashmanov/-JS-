import Neuron from './Neuron';

class NeuralNetwork {
    constructor(inputSize, hiddenSize, outputSize) {
        this.inputSize = inputSize;
        this.hiddenSize = hiddenSize;
        this.outputSize = outputSize;
        this.hiddenLayer = new Array(hiddenSize); // Скрытый слой
        this.outputLayer = new Array(outputSize); // Выходной слой
        for (let i = 0; i < hiddenSize; i++) {
            this.hiddenLayer[i] = new Neuron(inputSize);
        }
        for (let i = 0; i < outputSize; i++) {
            this.outputLayer[i] = new Neuron(hiddenSize);
        }
    }

    // Прямое распространение
    feedForward(inputs) {
        let hiddenOutputs = new Array(this.hiddenSize);
        for (let i = 0; i < this.hiddenSize; i++) {
            hiddenOutputs[i] = this.hiddenLayer[i].feedForward(inputs);
        }
        let outputs = new Array(this.outputSize);
        for (let i = 0; i < this.outputSize; i++) {
            outputs[i] = this.outputLayer[i].feedForward(hiddenOutputs);
        }
        return outputs;
    }
}

export default NeuralNetwork;