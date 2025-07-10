// src/App.js

import './App.css';
import Profile from './Profile.js';
import ShoppingList from './ShoppingList.js';
import Greeting from './Greeting.js';
import Product from './Product.js';
import BlogPost from './BlogPost.js';
import WelcomeMessage from './WelcomeMessage.js';

function MyButton(props) {

  function handleClick() {
    console.log(`Кликнули по кнопке "${props.text ? props.text : 'Click me'}"`);
  }
  return (
    <button onClick={handleClick}>
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
      <Product title="iPhone 14" price={999} />
      <Product title="Наушники Sony" price={249} />
      <hr />
      <BlogPost title="Введение в React" author="Алекс" likes={120} />
      <BlogPost title="REACT" author="Joe" likes={22220}/>
      <hr />
      <WelcomeMessage username="Дмитрий" />

    </div>
  );
}