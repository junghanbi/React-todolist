import React from 'react'
import styled from 'styled-components'


const TodoTemplate = ({children}) => {
  return (
    <TotoWrapper>
      <AppTitle>To Do List</AppTitle>
      <Content>
        {children}
      </Content>
    </TotoWrapper>
  )
}

const TotoWrapper = styled.div`
  width : 412px;
  margin : 6rem auto 0;
  border-radius : 20px;
  overflow : hidden;
  box-shadow : 0 0 5px #ccc;
  
`;

const AppTitle = styled.h1`
  background : #fff;
  font-size : 23px;
  height : 5rem;
  display :flex;
  justify-content : center;
  align-items : center;
  color : #333;
  font-weight : 500;
`;

const Content = styled.div`
  background : #fff;
`;

export default TodoTemplate