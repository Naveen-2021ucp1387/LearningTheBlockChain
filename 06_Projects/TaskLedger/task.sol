// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ToDo {
    struct Task {
        uint id;
        string name;
        string date;
    }

    address owner;
    Task task;
    mapping(uint => Task) tasks; //view task
    uint taskId = 1;
    constructor() {
        owner = msg.sender;
    }


    event taskCreate(uint taskId, string name);
    event taskUpdate(uint taskId, string name);
    event taskDelete(uint taskId);

    modifier checkId(uint id) {
        require(id != 0 && id < taskId, "Invalid Id");
        _;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "Invalid Owner");
        _;
    }

    function createTask(
        string calldata _taskName,
        string calldata _date
    ) public {
        tasks[taskId] = Task(taskId, _taskName, _date);
        taskId++;
        emit taskCreate(taskId, _taskName);
    }

    function updateTask(
        uint _taskId,
        string calldata _taskName,
        string calldata _date
    ) public checkId(_taskId) {
        tasks[_taskId] = Task(_taskId, _taskName, _date);
        emit taskUpdate(taskId, _taskName);
    }

    function allTask() public view returns (Task[] memory) {
        Task[] memory taskList = new Task[](taskId - 1);
        for (uint i = 0; i < taskId - 1; i++) {
            taskList[i] = tasks[i + 1];
        }
        return taskList;
    }

    function viewTask(
        uint _taskId
    ) public view checkId(_taskId) returns (Task memory) {
        return tasks[_taskId];
    }

    function deleteTask(uint _taskId) public checkId(_taskId) {
        delete tasks[_taskId];
        emit taskDelete(_taskId);
    }
}
// 0xf180FC8d8A0f624244067E7eDaDCB4A119A2A8aA