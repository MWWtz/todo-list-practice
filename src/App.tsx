import { useEffect, useState } from "react";
import EditForm from "./components/EditForm";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { Todo } from "./interfaces/Todo";

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([
    {
      title: "Todo 1",
      completed: false,
      id: 1,
      description: "Prueba 1",
    },
    {
      title: "Todo 2",
      completed: true,
      id: 2,
      description: "Prueba dos",
    },
  ]);
  const [editTodo, setEditTodo] = useState<any>();
  const [edit, setEdit] = useState<boolean>(false);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addNewTodo = (newTodo: Todo): void => {
    !edit
      ? setTodos([
          ...todos,
          { ...newTodo, completed: false, id: getCurrentTimestamp() },
        ])
      : setTodos(todos.map((td) => (td.id === newTodo.id ? newTodo : td)));
    setEdit(false);
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((td) => td.id !== id));
  };

  const toggleComplete = (id: number): void => {
    setTodos(
      todos.map((td) =>
        td.id === id ? { ...td, completed: !td.completed } : td
      )
    );
  };

  const getTodo = (id: number) => {
    setEdit(true);
    setEditTodo(todos.find((td) => td.id === id));
  };

  return (
    <div className=" bg-primary" style={{ height: "100vh" }}>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4">
            {!edit ? (
              <Form title="TS FORM" addNewTodo={addNewTodo} />
            ) : (
              <EditForm
                title="TS Edit"
                editTodo={editTodo}
                addNewTodo={addNewTodo}
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="row ">
              <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                getTodo={getTodo}
                toggleComplete={toggleComplete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
