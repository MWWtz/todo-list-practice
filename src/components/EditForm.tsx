import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Todo } from "../interfaces/Todo";

const initialState = {
  title: "",
  completed: false,
  description: "",
};

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  title: string;
  addNewTodo: (todo: Todo) => void;
  editTodo: Todo;
}

const EditForm = ({ title = "Form", addNewTodo, editTodo }: Props) => {
  const [todo, setTodo] = useState<Todo>(editTodo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = ({ target: { name, value } }: HandleInputChange) => {
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    addNewTodo(todo);
    setTodo(initialState);
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
          name="description"
          value={todo.description}
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
