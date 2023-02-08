import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Expense from "./components/Expenses/index";
import User from "./components/User/index";
import Signin from "./components/Signin/index";
  
function App(){
  return (
    <div className="App">
        <Routes>
              <Route exact path="/" element={<Signin/>}></Route>
              <Route path="/expense" element={<Expense/>}></Route>
              <Route path="/user" element={<User/>}></Route>
        </Routes>
    </div>
  );
}
// }
export default App;
