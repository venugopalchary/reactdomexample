import React from "react";
import logo from './logo.svg';

function RenderList() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} width="40px" alt="logo"/>
        </nav>
        this is way of binding the elements to React DOM
      </header>
      <ul>
        <li> React program is a UI program language</li>
        <li> React component based pgm</li>
        <li>React is composoble </li>
        <li>Imperative programing language </li>
        <li>declarative programing language </li>
      </ul>
      <footer>
        <small>@ 2024 This is venugopal development</small>
      </footer>
    </div>
  );
}

export default RenderList;
