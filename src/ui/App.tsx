import { useEffect } from "react";
import { useForm } from "./hooks/useForm";
import { Task } from "./components/tasks/Task";
import { useTodos } from "../data/todos/stores/todos.storage";
import { Header } from "./fragments/Header";
import { FormTask } from "./fragments/FormTask";
import { ITodoCreateModel } from "@/data/todos/models/todo-create.model";

const defaultForm = {
  title: '',
  description: ''
} as ITodoCreateModel

function App() {
  const [taskForm, handleTaskForm, resetForm] = useForm(defaultForm)

  const todosStore = useTodos()

  const handlerAddTask = () => {
    if (taskForm.title)
      todosStore.createTodo(taskForm).then(() => resetForm())
  }

  useEffect(() => {
    todosStore.loadData();
  }, [])

  return (
    <>
      <div className="h-screen flex justify-center bg-ui-background">
        <main className="flex flex-col gap-3 p-4 text-center">
          <Header />
          <div className="flex flex-col gap-2">
            <FormTask form={taskForm} handleForm={handleTaskForm} handleSubmit={handlerAddTask} />
            <section className="flex flex-col gap-2">
              {(todosStore.todos).map(todo => (
                <Task key={todo.id} todo={todo} />
              ))}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
