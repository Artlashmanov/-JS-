import React, { useState } from 'react';
import NeuralNetwork from './NeuralNetwork';


function App() {
  // Состояние для входных данных и выходных значений
  const [inputs, setInputs] = useState(Array.from({ length: 3 }, () => Math.random())); // Пример входных данных, требует 3 входных значения
  const [outputs, setOutputs] = useState([]);

  // Обаботчик изменения входных данных
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = parseFloat(value);
    setInputs(newInputs);
  };

  // Обработчик нажатия кнопки - Вычислить"
  const handleCalculate = () => {
    const neuralNetwork = new NeuralNetwork(3, 2, 1); // Создаем экземпляр нейронки с тремя входами, двумя скрытыми нейронами и одним выходом
    const newOutputs = neuralNetwork.feedForward(inputs);
    setOutputs(newOutputs);
  };

  return (
    <div className="App">
      <h1>Нейронная сеть</h1>
      <div className="input-container">
        {inputs.map((input, index) => (
          <input
            key={index}
            type="number"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <button onClick={handleCalculate}>Вычислить</button>
      <div className="output-container">
        {outputs.map((output, index) => (
          <div key={index}>Выход {index + 1}: {output.toFixed(4)}</div>
        ))}
      </div>
    </div>
  );
}

export default App;