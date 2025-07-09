// src/Greeting.js

// 1. Функция принимает один аргумент - объект props
function Greeting(props) {
  // 2. Давай посмотрим, что это за объект!
  console.log('Это прилетело в props:', props);

  // 3. Используем свойство 'name' из объекта props
  return <h1>Привет, {props.name}!</h1>;
}

// 4. Экспортируем компонент, чтобы App.js мог его использовать
export default Greeting;