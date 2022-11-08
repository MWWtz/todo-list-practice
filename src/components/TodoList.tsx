import React from "react";
import { Todo } from "../interfaces/interfaces";
import TodoCard from "./TodoCard";
import { BiTaskX } from "react-icons/bi";
import { useTodos } from "../hooks/useTodos";

const TodoList = () => {
  const { todos } = useTodos();
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
      {todos.map((td: Todo) => (
        <TodoCard todo={td} key={td.id} />
      ))}
    </div>
  );
};

export default TodoList;
