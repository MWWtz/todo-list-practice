import { useContext } from 'react';
import { TodoContext } from '../context/todos/TodoContext';




export const useTodos = () => {

    const { todoState, addNewTodo, deleteTodo,toggleTodo,editTodo,addEditedTodo } = useContext( TodoContext );
    const { todos,todoToEdit,edit } = todoState;

    return {
        todos: todos,
        todoToEdit,
        edit,
        addNewTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        addEditedTodo
    }
}