import "./App.css";
import TodoList from "./Components/TodoList";
import TodoContext from "./Context/TodoContext";
import TodoReducer from "./Reducers/TodoReducers";
import TodoState from "./Interfaces/TodoState";
import { useReducer } from "react";

function App() {
  const initialState: TodoState = {
    todoList: [
      {
        id: 1,
        text: "Todo 1",
        completed: false,
      },
      {
        id: 2,
        text: "Todo 2",
        completed: true,
      },
    ],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <>
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
