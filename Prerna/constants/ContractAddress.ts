export const CONTRACT_ADDRESS = "0x37cde4dde14e2afbd935774faafefb2618f9be44"
export const CONTRACT_ABI = [
  {
    ""anonymous"": false,
    ""inputs"": [
      {
        ""indexed"": true,
        ""internalType"": ""address"",
        ""name"": ""user"",
        ""type"": ""address""
      },
      {
        ""indexed"": true,
        ""internalType"": ""uint256"",
        ""name"": ""taskId"",
        ""type"": ""uint256""
      },
      {
        ""indexed"": false,
        ""internalType"": ""uint256"",
        ""name"": ""timestamp"",
        ""type"": ""uint256""
      }
    ],
    ""name"": ""TaskCompleted"",
    ""type"": ""event""
  },
  {
    ""anonymous"": false,
    ""inputs"": [
      {
        ""indexed"": true,
        ""internalType"": ""address"",
        ""name"": ""user"",
        ""type"": ""address""
      },
      {
        ""indexed"": true,
        ""internalType"": ""uint256"",
        ""name"": ""taskId"",
        ""type"": ""uint256""
      },
      {
        ""indexed"": false,
        ""internalType"": ""string"",
        ""name"": ""content"",
        ""type"": ""string""
      },
      {
        ""indexed"": false,
        ""internalType"": ""uint256"",
        ""name"": ""timestamp"",
        ""type"": ""uint256""
      }
    ],
    ""name"": ""TaskCreated"",
    ""type"": ""event""
  },
  {
    ""anonymous"": false,
    ""inputs"": [
      {
        ""indexed"": true,
        ""internalType"": ""address"",
        ""name"": ""user"",
        ""type"": ""address""
      },
      {
        ""indexed"": true,
        ""internalType"": ""uint256"",
        ""name"": ""taskId"",
        ""type"": ""uint256""
      }
    ],
    ""name"": ""TaskDeleted"",
    ""type"": ""event""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""string"",
        ""name"": ""_content"",
        ""type"": ""string""
      }
    ],
    ""name"": ""createTask"",
    ""outputs"": [],
    ""stateMutability"": ""nonpayable"",
    ""type"": ""function""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": ""_taskId"",
        ""type"": ""uint256""
      }
    ],
    ""name"": ""deleteTask"",
    ""outputs"": [],
    ""stateMutability"": ""nonpayable"",
    ""type"": ""function""
  },
  {
    ""inputs"": [],
    ""name"": ""getCompletedTaskCount"",
    ""outputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": """",
        ""type"": ""uint256""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [],
    ""name"": ""getMyTasks"",
    ""outputs"": [
      {
        ""components"": [
          {
            ""internalType"": ""uint256"",
            ""name"": ""id"",
            ""type"": ""uint256""
          },
          {
            ""internalType"": ""string"",
            ""name"": ""content"",
            ""type"": ""string""
          },
          {
            ""internalType"": ""bool"",
            ""name"": ""completed"",
            ""type"": ""bool""
          },
          {
            ""internalType"": ""uint256"",
            ""name"": ""createdAt"",
            ""type"": ""uint256""
          }
        ],
        ""internalType"": ""struct ToDoList.Task[]"",
        ""name"": """",
        ""type"": ""tuple[]""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": ""_taskId"",
        ""type"": ""uint256""
      }
    ],
    ""name"": ""getTask"",
    ""outputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": ""id"",
        ""type"": ""uint256""
      },
      {
        ""internalType"": ""string"",
        ""name"": ""content"",
        ""type"": ""string""
      },
      {
        ""internalType"": ""bool"",
        ""name"": ""completed"",
        ""type"": ""bool""
      },
      {
        ""internalType"": ""uint256"",
        ""name"": ""createdAt"",
        ""type"": ""uint256""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [],
    ""name"": ""getTaskCount"",
    ""outputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": """",
        ""type"": ""uint256""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""address"",
        ""name"": """",
        ""type"": ""address""
      }
    ],
    ""name"": ""taskCount"",
    ""outputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": """",
        ""type"": ""uint256""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": ""_taskId"",
        ""type"": ""uint256""
      }
    ],
    ""name"": ""toggleTask"",
    ""outputs"": [],
    ""stateMutability"": ""nonpayable"",
    ""type"": ""function""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""address"",
        ""name"": """",
        ""type"": ""address""
      },
      {
        ""internalType"": ""uint256"",
        ""name"": """",
        ""type"": ""uint256""
      }
    ],
    ""name"": ""userTasks"",
    ""outputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": ""id"",
        ""type"": ""uint256""
      },
      {
        ""internalType"": ""string"",
        ""name"": ""content"",
        ""type"": ""string""
      },
      {
        ""internalType"": ""bool"",
        ""name"": ""completed"",
        ""type"": ""bool""
      },
      {
        ""internalType"": ""uint256"",
        ""name"": ""createdAt"",
        ""type"": ""uint256""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  }
]