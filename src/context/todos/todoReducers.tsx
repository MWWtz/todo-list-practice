import { Todo, TodoState } from "../../interfaces/interfaces";

type TodoAction =
  | { type: "addTodo"; payload: Todo }
  | { type: "addEditedTodo"; payload: Todo }
  | { type: "toggleTodo"; payload: string }
  | { type: "editTodo"; payload: string }
  | { type: "deleteTodo"; payload: string };

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "addEditedTodo":
      return {
        ...state,
        todos: [
          ...state.todos.map((td) =>
            td.id === action.payload.id ? action.payload : td
          ),
        ],
      };
    case "deleteTodo":
      return {
        ...state,
        todos: [...state.todos.filter((td) => td.id !== action.payload)],
      };
    case "editTodo":
      return {
        ...state,
        edit: true,
        todoToEdit: state.todos.filter((td) => td.id !== action.payload)[0],
      };

    case "toggleTodo":
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
