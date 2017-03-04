import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';


const tabs = [{ title: "one", content: "I am the first" },
  { title: "two", content: "I am the second" },
  { title: "three", content: "I am the third" }];

document.addEventListener("DOMContentLoaded", ()=> {
  // const main = ;
  ReactDOM.render(<Tabs />, document.getElementById('main'));
});
