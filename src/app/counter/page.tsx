'use client'
import Todo from '@/components/Common/Todo';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
    const [count, setCount] = useState<any>(0);
    const [todos, setTodos] = useState([]);
    const [apiData, setApiData] = useState<any>([]);

    const expensiveCalculation = (num:number) => {
         for (let i = 0; i < 1000000000; i++) {
          num += 1;
        }
        return num;
      };

      const calculation = useMemo(()=>expensiveCalculation(count),[count]);
    //   const calculation = expensiveCalculation(count)
  
    const increment = () => {
      setCount((c:any) => c +1);
    };
    const addTodo = useCallback((): void => {
        setTodos((preV: any[]) => {
            return [...preV, "New Todo"]
        }
    );
      },[]);
      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            setApiData(json)
         })
})
  return (
    <>
    <Todo todos={todos} addTodo={addTodo} count={count} />
    <hr />
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
      <p>Expensive:{calculation}</p>
      <p>{apiData?.title}</p>
    </div>
  </>  )
}

export default Counter