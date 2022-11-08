import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces";

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  title: string;
}

const EditForm = ({ title }: Props) => {
  const [todo, setTodo] = useState<Todo>({} as Todo);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addNewTodo } = useTodos();
  const handleChange = ({ target: { name, value } }: HandleInputChange) => {
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    addNewTodo(todo);
    inputRef.current?.focus();
  };
  return (
    <div className="card card-body bg-secondary text-dark">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChange}
          ref={inputRef}
          className="form-control mb-3 rounded shadow-none border-0"
        />
        <input
          type="textarea"
          name="desc"
          value={todo.desc}
          onChange={handleChange}
          className="form-control mb-3 shadow-none border-0"
        />
        <button className="btn btn-primary" type="submit">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
