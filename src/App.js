import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Nav } from './components/Nav';
import { TodoList } from './components/Todos';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0; 
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    background-color: #dee3f9;
  }
`

const TodoContainer = styled.div`
  width: 80%;
  height: 80%;
`

export function App() {
  const [todos, setTodos] = useState([]);
  const amount = todos.length; 

  const getTodos = () => {
    axios.get('http://localhost:4000/todolist')
    .then((res) => {
      setTodos(res.data);
    })
    .catch((err) => console.log(`Error:`, err));
  }

  useEffect(() => getTodos() , [])

  return (
    <div className='app'>
      <GlobalStyle/>
      <TodoContainer>
          <Nav amount={amount} />     
          <TodoList todos={todos} setTodos={setTodos}/>
      </TodoContainer>   
    </div>
  );
}

