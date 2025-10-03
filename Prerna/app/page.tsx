'use client'
import React, { useState } from "react";
import {WalletButton} from "@vechain/dapp-kit-react"

const ToDoListApp: React.FC = () => {
  const [taskContent, setTaskContent] = useState("");
  const [taskId, setTaskId] = useState("");
  const [tasks, setTasks] = useState<any[]>([]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">ToDoList DApp</h1>
        <WalletButton />

        {/* Create Task */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Create a Task</h2>
          <input
            type="text"
            placeholder="Enter task content"
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Create Task
          </button>
        </div>

        {/* Toggle Task */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Toggle Task Completion</h2>
          <input
            type="number"
            placeholder="Enter task ID"
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />
          <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">
            Toggle Task
          </button>
        </div>

        {/* Delete Task */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Delete Task</h2>
          <input
            type="number"
            placeholder="Enter task ID"
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />
          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
            Delete Task
          </button>
        </div>

        {/* Get Tasks */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">My Tasks</h2>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Load My Tasks
          </button>
          <div className="mt-3 border rounded-lg p-3 h-40 overflow-y-auto bg-gray-50">
            {tasks.length === 0 ? (
              <p className="text-gray-500">No tasks loaded</p>
            ) : (
              tasks.map((task, idx) => (
                <div key={idx} className="border-b py-1">
                  <p>
                    <strong>ID:</strong> {task.id} | <strong>Content:</strong>{" "}
                    {task.content} | <strong>Status:</strong>{" "}
                    {task.completed ? "✅ Completed" : "❌ Pending"}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Task Stats</h2>
          <div className="flex gap-2">
            <button className="flex-1 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
              Get Task Count
            </button>
            <button className="flex-1 bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600">
              Get Completed Count
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoListApp;
