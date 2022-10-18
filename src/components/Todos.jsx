import styled from 'styled-components';
import axios from 'axios';
import { InputBtn } from './TodoInput';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListContainer = styled.ul`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 600px;
  padding: 3%;
`

const List = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 20px;
  font-weight: 800;

  .list {
    border-radius: 10px;
    box-shadow: 5px 5px 5px #909DD9;
    width: 40%;
    padding: 20px;
    margin: 0 30px 10px 0;
    text-align: center;
  }

  .bin:hover {
    font-size: 23px;
    color: #d90202;
  }
`

export function TodoList({todos, setTodos}){
  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:4000/todolist/${id}`)
    .then((res) => {
      setTodos(todos.filter(todo => todo.id !== id))
    })
    .catch((err) =>  console.log(`Error:`, err));
  }

  return (
    <>
      <ListContainer>
        {todos?.map(todo => {
        return (<List key={todo.id} id={todo.id}>
          <div className='list'>
            <span>{todo.todo}</span>
          </div>
          <FontAwesomeIcon 
          className='bin' 
          icon={faTrash} 
          onClick={() => handleDelete(todo.id)}
          />
          </List>)
        })}
        <InputBtn todos={todos}/>
      </ListContainer>
    </>
  )
}