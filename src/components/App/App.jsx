import React from 'react';
import './App.css';
import ToDoLine from '../ToDoLine/ToDoLine.jsx';

const App = () => {
  return (
    <div className={'main'}>
      <h1>To Do List</h1>
      <input type={'text'} placeholder={'what need to do'} />
      <ToDoLine />
      <ToDoLine />
      <ToDoLine />
      <ToDoLine />
    </div>
  );
};

export default App;
