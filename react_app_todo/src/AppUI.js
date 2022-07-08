import React from "react";
import { TodoCounter } from "./todo/TodoCounter/TodoCounter";
import { TodoSearch } from "./todo/TodoSearch/TodoSearch";
import { TodoList } from "./todo/TodoList/TodoList";
import { TodoItem } from "./todo/TodoItem/TodoItem";
import { Title } from "./todo/Title/Title";
import { CreateTodoButton } from "./todo/CreateTodoButton/CreateTodoButton";

export function AppUI({ 
    completedTodos, 
    totalTodos, 
    searchValue, 
    setSearchValue, 
    filteredTodos, 
    onComplete, 
    onRemove, 
    onCreate,
    loading,
    error
}) {
  return (
    <React.Fragment>
        <Title title="men" />
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
    
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
        
        <CreateTodoButton onCreate={onCreate} />
        <TodoList>
            {error && (<p>There was an error...</p>)}
            {loading && (<p>loading page...</p>)}
            {!loading && filteredTodos.length===0 && (<p>Make your first todo</p>)}
            
            {filteredTodos.map(todo => ( 
                <TodoItem key={todo.text} completed={todo.completed} text={todo.text} onComplete={()=> onComplete(todo.text) } onRemove={()=> onRemove(todo.text)} /> 
            ))}
        </TodoList>
    </React.Fragment>
  );
}
