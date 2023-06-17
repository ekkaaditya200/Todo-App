import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
    const [todos, setTodos] = useState([]);
  
    const addTodo = todo => {
      if (!todo.text) {
        alert("Please Enter Valid Sentence or Word");
        return;
      }
  
      const newTodos = [todo, ...todos];
  
      setTodos(newTodos);
      console.log(...todos);
    };
  
    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
  
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
  
    const removeTodo = id => {
      const removedArr = [...todos].filter(todo => todo.id !== id);
  
      setTodos(removedArr);
    };
  
    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  
    return (
      <div className="todoclass">
        <h2>What's the Plan for Today?</h2>
        <TodoInput onSubmit={addTodo} />
        <div className="todoList">
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          />
          </div>
      </div>
    );
  }
  
  export default Todo;