import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './pages/TaskList';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask';
import 'antd/dist/reset.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
};

export default App;
