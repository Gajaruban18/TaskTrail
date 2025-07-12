const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/authController')
const { protect } = require('../middlewares/authMiddleware');

// All routes below are protected
router.use(protect);

// @route   GET /api/tasks
// @desc    Get all tasks for user (with filters)
// @access  Private
router.get('/', getTasks);

// @route   POST /api/tasks
// @desc    Create a new task
// @access  Private
router.post('/', createTask);

// @route   PUT /api/tasks/:id
// @desc    Update task
// @access  Private
router.put('/:id', updateTask);

// @route   DELETE /api/tasks/:id
// @desc    Delete task
// @access  Private
router.delete('/:id', deleteTask);

module.exports = router;
