import React from "react";
import { TodoCounter } from "./todo/TodoCounter/TodoCounter";
import { TodoSearch } from "./todo/TodoSearch/TodoSearch";
import { TodoList } from "./todo/TodoList/TodoList";
import { TodoForm } from "./todo/TodoForm/TodoForm";
import { TodoItem } from "./todo/TodoItem/TodoItem";
import { Title } from "./todo/Title/Title";
import { CreateTodoButton } from "./todo/CreateTodoButton/CreateTodoButton";
import { TodoContext } from "./context/TodoContext";
import { useContext } from "react";
import { Modal } from "./modal/Modal";
import { Loader } from "./todo/Loader/Loader";


export function AppUI() {
    const {setSearchValue,onComplete,onRemove,openModal} = useContext(TodoContext);
    
    return (
        <TodoContext.Consumer>
            {({completedTodos,totalTodos,searchValue,onCreate,filteredTodos,loading,error}) => (
                <React.Fragment>
                    <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        
                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
            
                    <CreateTodoButton onCreate={onCreate} />
                    <TodoList>
                        {error && (<p>There was an error...</p>)}
                        {loading && (<Loader />)}
                        {!loading && filteredTodos.length===0 && (<p>Make your first todo</p>)}
                        
                        {filteredTodos.map(todo => ( 
                            <TodoItem key={todo.text} completed={todo.completed} text={todo.text} onComplete={()=> onComplete(todo.text) } onRemove={()=> onRemove(todo.text)} /> 
                        ))}
                    </TodoList>
                    
                    {openModal && (
                        <Modal>
                            <TodoForm />
                        </Modal>
                    )}
                </React.Fragment>
            )}
        </TodoContext.Consumer>
    );
}