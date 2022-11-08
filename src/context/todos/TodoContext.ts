import { createContext } from "react";
import { Todo, TodoState } from "../../interfaces/interfaces";

interface TodoContextProps {
    todoState: TodoState;
    addNewTodo: ( todo: Todo ) => void;
    addEditedTodo: ( todo: Todo ) => void;
    toggleTodo: ( id: string ) => void;
    deleteTodo: (id : string) => void;
    editTodo: (id : string) => void;
    
} 


export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps );