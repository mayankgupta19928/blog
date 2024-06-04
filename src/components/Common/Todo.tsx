import React, { memo } from 'react'

const Todo = (props:any) => {
    const { todos, addTodo,count} =props
 
  return (
    <>
    <h2>My Todos</h2>
    {todos.map((todo:any, index:number) => {
      return <p key={index}>{todo}</p>;
    })}
    <button onClick={addTodo}>Add Todo</button>
    Count:{count}
  </>  )
}

export default (Todo)