import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const CreateBtn = styled.button`
  position: absolute;
  right: 30px;
  bottom: 40px;

  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background-color: #909DD9;

  .add {
    color: #fff;
    font-size: 50px;
    font-weight: 500;
  }

  &:hover {
    background-color: #b8c1eb;
  }
`
const InputContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 40px;
  right: 30px;
  width : 300px;
  height: 250px;
  padding: 20px 5px;
  border-radius: 10px;
  background-color: #909DD9;
  z-index: 1; 

  .add_title {
    color: #fff;
    font-size: 1.7rem;
    font-weight: 800;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 80%;
    margin: 10px;
  }

`
const TodoInput = styled.input`
  border: none;
  border-radius: 10px;
  width: 240px;
  padding: 10px;
  margin-left: 10px;
  outline: none;
`

const SubmitBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: none;
  background-color: #fff;

  .check {
    color: #909DD9;
  }

  &:hover {
    background-color: #33c632;

    .check {
      color: #fff;
    }
  }
`

export function InputBtn({todos}){
  const [content, setContent] = useState('');
  const [isShow, setisShow] = useState(false); 

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = () => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/todolist',
        data: {
          id: todos.length+1,
          todo: content,
          done: false, 
        }
    })
    .then(() => {
      content.current.value = "";
    })
    .catch((error) => {
        console.error('ERROR: ', error);
    })
  }

  const onChangeClassName = () => {
    setisShow(!isShow);
  }

  return (
    <>
      <InputContainer className={isShow ? 'show' : null}>
        {console.log(isShow)}
        <span className='add_title'>Add ToDo 😉</span>
        <form className='form'>
          <TodoInput 
          placeholder='오늘의 할일은?'
          value={content}
          onChange={handleChange}
          autoFocus
          />
          <SubmitBtn onClick={() => {
            handleSubmit()
          }
            }>
            <span className='check'> ✔ </span>
          </SubmitBtn>
        </form>
      </InputContainer>

      <CreateBtn onClick={onChangeClassName}>
        <span className='add'>+</span>
      </CreateBtn>
    </>
  )
}