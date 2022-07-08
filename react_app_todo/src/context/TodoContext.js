import React from "react"
import { useReducer } from "react"
import { useHttpGet } from "../hooks/useHttpGet"


const TodoContext = React.createContext()

export function TodoProvider(props){
    const {loading,error,data:todos} = useHttpGet("http://localhost:12345/curso_introduccion_react_js/");
    //const {loading,error,data:todos} = useHttpGet("http://localhost:12345/curso_introduccion_react_js/?random="+Math.random());
    const [searchValue,setSearchValue] = useState("")
    const [,setTodos] = useLocalStorage("todos",[])
    const totalTodos = todos.length
    
    const completedTodos = todos.reduce((total, todo) => {
        if(todo.completed)return total+1;
        return total+0;
    }, 0)
    
    let filteredTodos = todos;
    
    const onComplete = (text) => {
        const index = todos.findIndex((todo) => (todo.text === text))
        todos[index].completed=true
        setTodos([...todos])
    }
    
    const onRemove = (text) => {
        setTodos(todos.filter((todo) => (todo.text !== text)))
    }
                    
    const onCreate = () => {
        const text = prompt("text")
        todos.push({text:text, completed:false})
        setTodos([...todos])
    }
                        
    if(searchValue){
        filteredTodos = todos.filter((todo)=>{
            return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        })
    }
    
    return (
        <TodoContext.Provider value={{
            
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export TodoContext;
