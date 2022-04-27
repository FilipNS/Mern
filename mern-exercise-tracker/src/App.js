import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import ExercisesList from './components/exercisesList';
import EditExercises from './components/editExercises';
import CreateUser from './components/createUser';
import CreateExercises from './components/createExercises';

function App() {
  return (

    <Router>
        <div className="container">
          <Navbar /> 
          <br/>
          <Routes>
              <Route path="/" exact element={<ExercisesList />} />
              <Route path="/:id" exact element={<EditExercises />} />
              <Route path="/create" exact element={<CreateExercises />} />
              <Route path="/user" exact element={<CreateUser />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
