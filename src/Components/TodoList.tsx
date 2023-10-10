import useTodoContext from "../Hooks/useTodoContext";
import Todo from "../Interfaces/Todo";
import AddTodo from "./AddTodo";
import TodoComponent from "./Todo";

function TodoList() {
  const { state } = useTodoContext();
  return (
    <>
      <p>Welcome to Todo-app with TS</p>
      <h1>Todo-Application</h1>
      <AddTodo />
      {state.todoList.map((todo: Todo) => (
        <TodoComponent
          key={todo.id}
          text={todo.text}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </>
  );
}

export default TodoList;
