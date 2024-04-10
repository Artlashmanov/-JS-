Название программы: Простая нейронная сеть ( Сильно не ругаться = ))

Описание программы:
Эта простая нейронка реализует базовые функции, такие как прямое распространение (feedforward) сигналов и 
вычисление входных значений на основе входных данных.представляет из себя небольшую модель нейронной сети, 
которая может быть использована для демонстрации базовых коцепций работы нейронных сетей.

Функции след. :

1. Прямое распространение (Feedforward):

   Нейросеть принимает данные и передает их через скрытый слой нейронов к выходному слою.
   Каждый нейрон в слое вычисляет взвешенную сумму входных значений с учетом их весов и добавляет смещение bias.
   Затем эта сумма, проходит через функцию активации, в данном случае сигмоиду, и результат становится выходным значением нейрона.

2. Инициализация весов и смещений:
   При создании нейрона веса входов и смещение инициализируются случайными значениями. 
   Это позволяет нейронной сети начать обучение с некоторой случайной иницализацией, которая может быть изменена в процессе обучения.

3. Функция активации (сигмоида):
   Функция активации используется для преобразования суммы входных значений нейрона в выходное значение. 
   В данном случае используется сигмоидальная функция активации, которая обычно используется в нейронных сетях для создания нелинейности и нормализации выходных значений.

4. Прогнозирование:
   После обучения нейронная сеть может использоваться для прогнозирования выходных значений на основе новых входных данных. 
   Это достигается передачей входных данных через сеть с помощью прямого распространения и получением выходных значений на выходном слое.

Но !!!
Эта нейронная сеть не обучена конкретной задаче и не способна делать сложные прогнозы без предварительного обучения на данных.
Для использования в реальных задачах необходимо обучение сети на данных, который представляет интересующую задачу, такую как класификация, регресия или что то там другое.