import { DELETE_TODO, TOGGLE_TODO } from "../Contants/ActionConstants";
import useTodoContext from "../Hooks/useTodoContext";

function TodoComponent({ text, completed, id,}: { text: string; completed: boolean; id: number}) {
  const { dispatch } = useTodoContext();

  function handleTodoToggle() {
    dispatch({ type: TOGGLE_TODO, payload: { id: id } });
  }

  function handleTodoDelete() {
    dispatch({ type: DELETE_TODO, payload: { id: id } });
  }

  return (
    <li>
      {text}{" "}
      <input type="checkbox" checked={completed} onChange={handleTodoToggle} />
      <button onClick={handleTodoDelete}>X</button>
    </li>
  );
}

export default TodoComponent;
