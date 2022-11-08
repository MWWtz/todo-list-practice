import { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces";

interface Props {
  todo: Todo;
}

const TodoCard = ({
  todo: { title, desc, id, completed },
}: Props): JSX.Element => {
  const { deleteTodo, toggleTodo, editTodo } = useTodos();
  return (
    <div className="card card-body bg-secondary rounded-0 mb-2">
      <h3
        onClick={() => id && toggleTodo(id)}
        className={completed ? "text-muted text-decoration-line-through" : ""}
      >
        {title}{" "}
      </h3>
      <p>{id}</p>
      <p>{desc}</p>
      <button
        className="btn btn-info btn-block mb-2"
        onClick={() => id && editTodo(id)}
      >
        Edit <AiTwotoneEdit />
      </button>
      <button
        className="btn btn-danger btn-block"
        onClick={() => id && deleteTodo(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoCard;
