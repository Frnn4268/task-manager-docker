import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { updateTask, getTasks } from '../services/taskService';
import { useParams, useNavigate } from 'react-router-dom';

const { Option } = Select;

const EditTask = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const tasks = await getTasks();
      const taskToEdit = tasks.find((task) => task._id === id);
      setTask(taskToEdit);
      form.setFieldsValue(taskToEdit);
    };

    fetchTask();
  }, [id, form]);

  const onFinish = async (values) => {
    await updateTask(id, values);
    navigate('/');
  };

  return (
    <div>
      {task ? (
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter the title' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the description' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="priority" label="Priority" rules={[{ required: true, message: 'Please select the priority' }]}>
            <Select>
              <Option value="Low">Low</Option>
              <Option value="Medium">Medium</Option>
              <Option value="High">High</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditTask;
