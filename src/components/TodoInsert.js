import React, { useState, useCallback } from 'react'
import { MdAdd } from 'react-icons/md'
import styled from 'styled-components'

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  },[])

  //버튼을 클릭하면 발생할 이벤트
  const onSubmit = useCallback((e)=> {
    onInsert(value);
    setValue('');
    e.preventDefault();
  },[onInsert,value])
 

  return (
    <TodoInserWrapper onSubmit={onSubmit}>
      <input 
      type="text" 
      placeholder='할 일을 입력하세요.' 
      value={value}
      onChange={onChange}
      />
      <button><MdAdd /></button>
    </TodoInserWrapper>
  )
}

const TodoInserWrapper = styled.form`
  display : flex;
  background : none;
  padding : 0 1rem;
  
  input{
    flex-basis : 70%;
    background : none;
    outline : none;
    border : 1.5px solid #ccc;
    border-radius : 8px;
    padding : 0.5rem;
    font-size : 0.9rem;
    line-height : 1.5;
    color : #333;
    &::placeholder {
      color : #666;
    }
    flex : 0.95;
    margin: auto;
  }

  button{
    margin-right : 10px;
    background : yellowgreen;
    border-radius : 10px;
    outline : none;
    border : none;
    color : #fff;
    padding : 0 1rem;
    font-size : 1rem;
    cursor : pointer;
    transition : all 0.2s;
    &:hover{
      background : #adb5bd;
    }
  }
`;

export default TodoInsert