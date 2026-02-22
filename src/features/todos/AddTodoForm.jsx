import { useState } from "react"

export default function AddTodoForm({ onCreate, isPending }) {
  const [taskName, setTaskName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!taskName.trim()) return

    onCreate({
      name: taskName,
      status: "TODO",
      priority: "MEDIUM",
    })

    setTaskName("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-10"
      aria-label="Add new task form"
    >
      <input
        type="text"
        placeholder="Add new task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
        className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="New task name"
      />

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition disabled:opacity-50"
      >
        {isPending ? "Adding..." : "Add Task"}
      </button>
    </form>
  )
}