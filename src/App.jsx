import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  
 const todos = useSelector(state=>state.todos.todos)
  
 

  return (
    <>
      <form className="container w-50 mx-auto mt-5 d-flex align-items-center gap-3">
      <input type="email" className="form-control" id="name" placeholder="name@example.com"/>
      <button className="btn btn-primary w-25">ADD</button>
      </form>

      <div className="todo-items container w-50 mx-auto">
        <div className="todo-item d-flex align-items-center justify-content-between bg-info py-2 my-2">
          <p className="fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          <button className="btn btn-danger">delete</button>
        </div>
      </div>
    </>
  );
}

export default App;
