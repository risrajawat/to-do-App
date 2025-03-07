import React from "react";
import tick from "../assets/tick.png";
import notTick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img
          className="w-7 border-1 border-black rounded-full"
          src={isComplete ? tick : notTick}
          alt=""
        />
        <p
          className={`text-[17px] ml-2 text-semibold cursor-pointer decoration-slate-900 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => {
          deleteTodo(id);
        }}
        className="w-4 cursor-pointer hover:text-gray-500"
        src={deleteIcon}
        alt=""
      />
    </div>
  );
};

export default TodoItems;
