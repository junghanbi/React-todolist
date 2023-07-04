import React from 'react'
import{
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
} from 'react-icons/ri'
import{
  GoTrash
} from 'react-icons/go'
import styled from 'styled-components'
import cn from 'classnames'


const TodoListItem = ({todo,onRemove,onToggle}) => {
  const {id, text, checked} = todo;
  return (
    <TodoItemWrapper>
      <CheckBox 
      className={cn('checkbox', {checked})}
      onClick={(() => onToggle(id))}
      >
        {checked ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />}
        <div className='text'>{text}</div>
      </CheckBox>
      <Remove onClick={()=> onRemove(id)}>
        <GoTrash />
      </Remove>
    </TodoItemWrapper>
  )
}

const TodoItemWrapper = styled.div`
  display : flex;
  align-items : center;
  padding : 1rem 2rem;
`;

const CheckBox = styled.div`
  display : flex;
  align-items : center;
  cursor :pointer;
  flex : 1;
  
  svg{
    font-size : 1.3rem;
    color : #ccc;
  }

  .text{
    margin-left : 10px;
    color : #666;
  }

  &.checked{
    svg{
      color : yellowgreen;
    }
    .text{
      color : #ccc;
      text-decoration: line-through;
    }
  }
`;

const Remove = styled.div`
  display : flex;
  align-items : center;
  font-size : 1.3rem;
  color : #666;
  cursor :pointer;
  &:hover {
    color : #adb5bd;
  }
`;

export default TodoListItem