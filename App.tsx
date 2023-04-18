import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { FormEvent, useState } from "react";
import Form from "./components/Form";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Form />
    </div>
  );
}
export default App;
