import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces";

const initialState: Todo = {
  title: "",
  completed: false,
  id: "1",
  desc: "",
};

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  title: string;
}

const Form = ({ title = "Form" }: Props) => {
  const [todo, setTodo] = useState<Todo>(initialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addNewTodo } = useTodos();

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
          required
        />
        <input
          type="textarea"
          name="desc"
          value={todo.desc}
          onChange={handleChange}
          className="form-control shadow-none border-0"
          required
        />
        <p className="text-danger">{}</p>
        <button className="btn btn-primary" type="submit">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default Form;
