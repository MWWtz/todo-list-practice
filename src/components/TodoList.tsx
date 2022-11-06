import React from "react";
import { Todo } from "../interfaces/Todo";
import TodoCard from "./TodoCard";
import { BiTaskX } from "react-icons/bi";

interface Props {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  getTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TodoList = ({ todos, deleteTodo, getTodo, toggleComplete }: Props) => {
  if (todos.length === 0)
    return (
      <div className="text-light text-center">
        <br />
        <h1>There are no tasks yet</h1>
        <BiTaskX size="15rem" />
      </div>
    );
  return (
    <div className="col-md-4">
      {todos.map((td) => (
        <TodoCard
          todo={td}
          key={td.id}
          deleteTodo={deleteTodo}
          getTodo={getTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
