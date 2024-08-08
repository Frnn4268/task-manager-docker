import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { createTask } from '../services/taskService';

const { Option } = Select;

const CreateTask = ({ closeDrawer }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    await createTask(values);
    closeDrawer();
  };

  return (
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
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTask;
