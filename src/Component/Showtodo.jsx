import { nanoid } from "@reduxjs/toolkit";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, RemoveTodo, UpdateTodo } from "../CreateSlice/TodoSlice";

export const Showtodo = () => {
  let [text, setText] = useState("");
  let [editId, seteditId] = useState(null);

  let todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handalonclick = () => {
    if (text.trim() === "") {
      return;
    }
    let payload = {
      id: nanoid(),
      text: text,
    };
    if (editId === null) {
      dispatch(addTodo(payload));
      setText("");
    } else {
      let payload = {
        id: editId,
        text: text,
      };
      dispatch(UpdateTodo(payload));
    }
setText(""
)
    seteditId(null);
  };

  const handleRemoveClick = (id) => {
    dispatch(RemoveTodo(id));
  };

  const handaleditTodo = (id) => {
    const updateTodo = todos.find((todo) => todo.id === id);
    setText(updateTodo.text);
    seteditId(updateTodo.id);
  
  };
 
  let handalonkeyPress = (e) => {
    if (e.key === "Enter") {
      handalonclick();
    }
  };

  return (
    <>
      <h1 className="text-black text-2xl mb-3">Todos</h1>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handalonkeyPress}
      />
      <button
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ml-3"
        onClick={handalonclick}
      >
        {editId ? "save" : "AddTodo"}
      </button>
      <h1 className="text-black text-2xl mt-4">Todo List </h1>
      <ul className="list-none">
        {todos.map((item) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={item.id}
          >
            <div className="text-white">{item.text}</div>
            <div className="text-white">
              <button
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                onClick={() => handleRemoveClick(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <button
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md ml-2"
                onClick={() => handaleditTodo(item.id)}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h10zm3 0a2 2 0 012 2v14a2 2 0 01-2 2h-1M2 15l5-5 5 5M2 10v4h8"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      
    </>
  );
};
