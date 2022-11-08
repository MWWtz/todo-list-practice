import { useEffect, useState } from "react";
import EditForm from "./components/EditForm";
import Form from "./components/Form";
import FormLayout from "./components/FormLayout";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/todos/todoProvider";

function App(): JSX.Element {
  return (
    <TodoProvider>
      <div className=" bg-primary" style={{ height: "100vh" }}>
        <div className="container p-4">
          <div className="row">
            <FormLayout />
            <div className="col-md-8">
              <div className="row ">
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
