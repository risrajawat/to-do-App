import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-gray-300 shadow-lg border border-gray-300 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-cyan-600 bg-clip-text text-transparent">To-Do List</h1>
      </div>

      {/* --------------Input & button------------------ */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-10 placeholder:text-slate-600"
          type="text"
          placeholder="Add Your Task"
          onKeyDown={(e) => {e.key === "Enter" && add()}}
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-blue-500 hover:bg-blue-600 text-white h-10 w-32 text-lg cursor-pointer"
        >
          ADD
        </button>
      </div>

      {/* --------To-Do list--------- */}
      <div>
        {todoList.map((item, idx) => {
          return (
            <TodoItems
              key={idx}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
