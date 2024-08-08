import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/taskService';
import TaskCard from '../components/TaskCard';
import { Button, Row, Col, Drawer } from 'antd';
import CreateTask from './CreateTask';
import EditTask from './EditTask';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEdit = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
    setDrawerVisible(true);
  };

  const handleCreate = () => {
    setCurrentTask(null);
    setIsEditing(false);
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
    loadTasks();
  };

  return (
    <div>
      <Button type="primary" onClick={handleCreate}>
        Create Task
      </Button>
      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        {tasks.map((task) => (
          <Col key={task._id} span={8}>
            <TaskCard task={task} onDelete={handleDelete} onEdit={handleEdit} />
          </Col>
        ))}
      </Row>
      <Drawer
        title={isEditing ? 'Edit Task' : 'Create Task'}
        width={720}
        onClose={closeDrawer}
        visible={drawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        {isEditing ? (
          <EditTask task={currentTask} closeDrawer={closeDrawer} />
        ) : (
          <CreateTask closeDrawer={closeDrawer} />
        )}
      </Drawer>
    </div>
  );
};

export default TaskList;
