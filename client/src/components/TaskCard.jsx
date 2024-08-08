import React from 'react';
import { Card, Button } from 'antd';

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <Card
      title={task.title}
      extra={<Button onClick={() => onEdit(task)}>Edit</Button>}
      actions={[<Button onClick={() => onDelete(task._id)}>Delete</Button>]}
    >
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
    </Card>
  );
};

export default TaskCard;
