import { useReducer } from "react";
import { Todo, TodoState } from "../../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducers";

const initialState: TodoState = {
  todos: [],
  todoToEdit: {} as Todo,
  edit: false,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  const addNewTodo = (newTodo: Todo) => {
    dispatch({ type: "addTodo", payload: newTodo });
  };
  const addEditedTodo = (newTodo: Todo) => {
    dispatch({ type: "addEditedTodo", payload: newTodo });
  };
  const deleteTodo = (id: string) => {
    dispatch({ type: "deleteTodo", payload: id });
  };
  const editTodo = (id: string) => {
    dispatch({ type: "editTodo", payload: id });
  };
  const toggleTodo = (id: string) => {
    dispatch({ type: "toggleTodo", payload: id });
  };

  return (
    <TodoContext.Provider
      value={{
        todoState,
        addNewTodo,
        deleteTodo,
        toggleTodo,
        editTodo,
        addEditedTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
