// src/App.js

import './App.css';
import Profile from './Profile.js';
import ShoppingList from './ShoppingList.js';
import Greeting from './Greeting.js';

function MyButton(props) {
  return (
    <button>
      {props.text ? props.text : 'Click me'}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <MyButton text="Нажми сюда!" />
      <MyButton text="Отправить форму" />
      <hr />
      <h2>My Profile</h2>
      <Profile />
      <hr />
      <h2>Shopping List</h2>
      <ShoppingList />
      <hr />
      <Greeting name="Дима" />
      <Greeting name="Мария" />
      <hr />
    </div>
  );
}