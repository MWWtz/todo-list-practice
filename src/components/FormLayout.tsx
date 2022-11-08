import { useTodos } from "../hooks/useTodos";
import EditForm from "./EditForm";
import Form from "./Form";

const FormLayout = () => {
  const { edit } = useTodos();
  return (
    <div className="col-md-4">
      {!edit ? <Form title="TS FORM" /> : <EditForm title="TS Edit" />}
    </div>
  );
};

export default FormLayout;
