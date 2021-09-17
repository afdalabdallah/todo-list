import React,{useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import CreateTodo from '../modals/CreateTodo'

function TodoList() {
    const [todos, setTodos] = useState([])
    
    
    const addTodo = todo => {
        if(!todo.text){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text){
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }


    const completeTodo = id => {
        let updatedTodos = todos.map (todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <>
          <h2>To Do</h2>
          {/* <button onClick={() => setModal(true)}>Creat Task</button>
          <CreateTodo toggle={toggle} modal = {modal} /> */}
          <TodoForm onSubmit={addTodo} />
          <div className="todo-container">
            <Todo 
            todos = {todos}
            completeTodo = {completeTodo}
            removeTodo = {removeTodo}
            updateTodo = {updateTodo}
            />
          </div>
        </>
          
        
    )
}

export default TodoList
