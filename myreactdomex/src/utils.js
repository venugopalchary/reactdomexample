import React from 'react';
import ReactDOM from 'react-dom/client';


 const page = (<div>
    <li>
      <ul>this is React program</ul>
      <ul>this is React component based pgm</ul>
      <ul>React is composoble </ul>
    </li>
  </div>)

ReactDOM.render(page, document.getElementById("appdiv"))

// const root = ReactDOM.render(document.getElementById('root'));
// root.render(page);