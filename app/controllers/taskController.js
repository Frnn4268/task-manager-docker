const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.createTask = async (req, res) => {
  const { title, description, priority } = req.body;
  try {
    const newTask = new Task({
      title,
      description,
      priority,
    });
    const task = await newTask.save();
    res.json(task);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.updateTask = async (req, res) => {
  const { title, description, priority } = req.body;
  try {
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }
    task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, priority } },
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.deleteTask = async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }
    await Task.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Task removed' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};
