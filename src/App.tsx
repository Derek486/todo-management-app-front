import React, { useEffect, useState } from "react";
import { useForm } from "./hooks/useForm";
import { getTodos, postTodo } from "./services/todo.service";
import { ITodoCreateModel, ITodoModel } from "./services/todo.service-types";

function App() {
  const [taskForm, handleTaskForm] = useForm({
    title: '',
    description: ''
  } as ITodoCreateModel)
  const [todos, setTodos] = useState<ITodoModel[]>([])

  const handlerAddTask = () => {
    postTodo(taskForm as ITodoCreateModel)
      .then(response => {
        if (response.data) {
          setTodos(prev => prev.concat(response.data!))
        }
      })
  }

  useEffect(() => {
    getTodos()
      .then(response => {
        setTodos(response.data || []);
      })
  }, [])

  return (
    <>
      <div className="h-screen flex justify-center bg-ui-background">
        <main className="flex flex-col gap-3 p-4 text-center">
          <header>
            <h1 className="text-xl text-ui-main">Todo <span className="text-ui-highlight">App</span></h1>
            <p className="text-ui-paragraph">Create, read, update and delete all your tasks here</p>
          </header>
          <div className="flex flex-col gap-2">
            <section className="flex items-center gap-2">
              <input
                type="text"
                name="title"
                value={taskForm.title}
                onChange={(e) => handleTaskForm(e)}
                className="flex-1 p-2 rounded transition-shadow border-2 border-ui-highlight/50 focus:outline-none focus:border-ui-highlight focus:shadow-xs focus:shadow-ui-highlight text-ui-button-text"
                placeholder="Input the task..."
              />
              <button
                onClick={() => handlerAddTask()}
                className="h-full px-3 py-1.5 cursor-pointer rounded transition-colors border-2 border-ui-stroke/40 hover:border-ui-stroke/30 active:border-ui-stroke/20 bg-ui-button hover:bg-ui-button/80 active:bg-ui-button/60 font-semibold text-ui-button-text"
              >
                + Add
              </button>
            </section>
            <section className="flex flex-col gap-2">
              {todos.map(todo => (
                <div 
                  key={todo.id}
                  className="p-3 rounded bg-ui-stroke/25 text-ui-main"
                >
                  {todo.title}
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
