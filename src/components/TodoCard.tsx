import { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { Todo } from "../interfaces/Todo";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
  getTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TodoCard = ({
  todo: { title, description, id, completed },
  deleteTodo,
  getTodo,
  toggleComplete,
}: Props): JSX.Element => {
  return (
    <div className="card card-body bg-secondary rounded-0 mb-2">
      <h3
        onClick={() => id && toggleComplete(id)}
        className={completed ? "text-muted text-decoration-line-through" : ""}
      >
        {title}{" "}
      </h3>
      <p>{id}</p>
      <p>{description}</p>
      <button
        className="btn btn-info btn-block mb-2"
        onClick={() => id && getTodo(id)}
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
