import { Link } from "react-router-dom"

export default function TaskCard({
  todo,
  onToggle,
  onDelete,
  isUpdating,
  isDeleting,
}) {
  const isDone = todo.status === "DONE"

  return (
    <li className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* Left Content */}
        <div className="flex-1">
          <Link
            to={`/todos/${todo.id}`}
            className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition"
          >
            {todo.name}
          </Link>

          {/* Status & Priority */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            
            {/* Status Badge */}
            <span
              className={`flex items-center gap-1 px-2 py-1 rounded-full font-medium ${
                isDone
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isDone ? "bg-emerald-500" : "bg-yellow-500"
                }`}
              ></span>
              {todo.status}
            </span>

            {/* Priority Badge */}
            <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
              {todo.priority}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row sm:flex-col gap-2">
          <button
            onClick={() => onToggle(todo)}
            disabled={isUpdating}
            aria-pressed={isDone}
            className={`text-sm px-3 py-1.5 rounded-md text-white transition disabled:opacity-50 ${
              isDone
                ? "bg-gray-500 hover:bg-gray-600"
                : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
            {isUpdating
              ? "Updating..."
              : isDone
              ? "Undo"
              : "Complete"}
          </button>

          <button
            onClick={() => onDelete(todo.id)}
            disabled={isDeleting}
            className="text-sm px-3 py-1.5 rounded-md bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-50"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </li>
  )
}