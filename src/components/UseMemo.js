import React, { useMemo } from 'react'

const UseMemo = ({todos}) => {
    const totalTodos = useMemo(()=>{
        return todos.length
    },[todos])
  return (
    <div>
      <h2>length of todos:{totalTodos}</h2>
    </div>
  )
}

export default UseMemo