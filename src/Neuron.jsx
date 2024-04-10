class Neuron {
    constructor(inputSize) {
        this.weights = new Array(inputSize); // Веса входов
        this.bias = Math.random(); // Смещение (bias)
        for (let i = 0; i < inputSize; i++) {
            this.weights[i] = Math.random(); // Инициализируем веса случайными значениями
        }
    }

    // Функция активации (в данном случае сигмоида)
    activationFunction(x) {
        return 1 / (1 + Math.exp(-x));
    }

    // Прямое распространение (feedforward)
    feedForward(inputs) {
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        sum += this.bias;
        return this.activationFunction(sum);
    }
}

export default Neuron;