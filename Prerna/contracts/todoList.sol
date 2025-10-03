// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ToDoList {
    struct Task {
        uint256 id;
        string content;
        bool completed;
        uint256 createdAt;
    }
    
    mapping(address => Task[]) public userTasks;
    mapping(address => uint256) public taskCount;
    
    event TaskCreated(
        address indexed user,
        uint256 indexed taskId,
        string content,
        uint256 timestamp
    );
    
    event TaskCompleted(
        address indexed user,
        uint256 indexed taskId,
        uint256 timestamp
    );
    
    event TaskDeleted(
        address indexed user,
        uint256 indexed taskId
    );
    
    // Function 1: Create a new task
    function createTask(string memory _content) public {
        require(bytes(_content).length > 0, "Task content cannot be empty");
        
        uint256 taskId = taskCount[msg.sender];
        
        userTasks[msg.sender].push(Task({
            id: taskId,
            content: _content,
            completed: false,
            createdAt: block.timestamp
        }));
        
        taskCount[msg.sender]++;
        
        emit TaskCreated(msg.sender, taskId, _content, block.timestamp);
    }
    
    // Function 2: Toggle task completion status
    function toggleTask(uint256 _taskId) public {
        require(_taskId < userTasks[msg.sender].length, "Task does not exist");
        
        Task storage task = userTasks[msg.sender][_taskId];
        task.completed = !task.completed;
        
        if (task.completed) {
            emit TaskCompleted(msg.sender, _taskId, block.timestamp);
        }
    }
    
    // Bonus Function: Delete a task
    function deleteTask(uint256 _taskId) public {
        require(_taskId < userTasks[msg.sender].length, "Task does not exist");
        
        // Move the last task to the deleted position and pop the array
        uint256 lastIndex = userTasks[msg.sender].length - 1;
        
        if (_taskId != lastIndex) {
            userTasks[msg.sender][_taskId] = userTasks[msg.sender][lastIndex];
        }
        
        userTasks[msg.sender].pop();
        
        emit TaskDeleted(msg.sender, _taskId);
    }
    
    // Get all tasks for the caller
    function getMyTasks() public view returns (Task[] memory) {
        return userTasks[msg.sender];
    }
    
    // Get a specific task
    function getTask(uint256 _taskId) public view returns (
        uint256 id,
        string memory content,
        bool completed,
        uint256 createdAt
    ) {
        require(_taskId < userTasks[msg.sender].length, "Task does not exist");
        
        Task memory task = userTasks[msg.sender][_taskId];
        return (task.id, task.content, task.completed, task.createdAt);
    }
    
    // Get number of tasks for caller
    function getTaskCount() public view returns (uint256) {
        return userTasks[msg.sender].length;
    }
    
    // Get number of completed tasks
    function getCompletedTaskCount() public view returns (uint256) {
        uint256 completed = 0;
        Task[] memory tasks = userTasks[msg.sender];
        
        for (uint256 i = 0; i < tasks.length; i++) {
            if (tasks[i].completed) {
                completed++;
            }
        }
        
        return completed;
    }
}