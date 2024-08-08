import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/taskService';
import TaskCard from '../components/TaskCard';
import { Button, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div>
      <Button type="primary" onClick={() => navigate('/create')}>
        Create Task
      </Button>
      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        {tasks.map((task) => (
          <Col key={task._id} span={8}>
            <TaskCard task={task} onDelete={handleDelete} onEdit={(task) => navigate(`/edit/${task._id}`)} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TaskList;
