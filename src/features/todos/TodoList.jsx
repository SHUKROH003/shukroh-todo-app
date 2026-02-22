import AddTodoForm from "./AddTodoForm"
import TaskCard from "./TaskCard"
import SearchFilterBar from "./SearchFilterBar"
import Pagination from "./Pagination"
import {
  useTodos,
  useCreateTodo,
  useUpdateTodo,
  useDeleteTodo,
} from "./useTodos"
import { useState, useEffect } from "react"

export default function TodoList() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState(search)

  const createTodo = useCreateTodo()
  const updateTodo = useUpdateTodo()
  const deleteTodo = useDeleteTodo()

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search)
      setPage(1)
    }, 500)

    return () => clearTimeout(timeout)
  }, [search])

  const { data, isLoading, isError } = useTodos(
    page,
    debouncedSearch,
    status
  )

  const todos = data?.data || []
  const totalPages = data?.meta?.total
    ? Math.ceil(data.meta.total / data.meta.limit)
    : 1

  const handleToggleStatus = (todo) => {
    updateTodo.mutate({
      id: todo.id,
      updatedData: {
        ...todo,
        status: todo.status === "DONE" ? "TODO" : "DONE",
      },
    })
  }

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return
    deleteTodo.mutate(id)
  }

  return (
    <section
      className="max-w-4xl mx-auto px-4 py-10"
      aria-labelledby="page-title"
    >
      {/* Page Header */}
      <header className="mb-10">
        <h1
          id="page-title"
          className="text-3xl font-bold text-gray-900"
        >
          My Tasks
        </h1>
        <p className="text-gray-600 mt-2">
          Stay organized and manage your workload efficiently.
        </p>
      </header>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="space-y-4" aria-live="polite">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error */}
      {isError && (
        <div
          role="alert"
          className="text-center py-10 bg-red-50 border border-red-200 rounded-lg"
        >
          <p className="text-red-600 font-medium">
            Something went wrong while loading tasks.
          </p>
        </div>
      )}

      {/* Main Content */}
      {!isLoading && !isError && (
        <>
          {/* Search & Filter */}
          <SearchFilterBar
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={(value) => {
              setStatus(value)
              setPage(1)
            }}
          />

          {/* Create Task */}
          <AddTodoForm
            onCreate={(data) => createTodo.mutate(data)}
            isPending={createTodo.isPending}
          />

          {/* Empty State */}
          {todos.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-xl shadow-sm border mt-8">
              <div className="w-16 h-16 mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-2xl text-gray-400">📋</span>
              </div>

              <h2 className="text-xl font-semibold text-gray-800">
                No tasks found
              </h2>

              <p className="text-gray-500 mt-2 max-w-sm">
                There are no tasks matching your current search or filter.
                Try adjusting your filters or create a new task.
              </p>
            </div>
          ) : (
            <>
              {/* Task List */}
              <ul className="space-y-4 mt-6">
                {todos.map((todo) => (
                  <TaskCard
                    key={todo.id}
                    todo={todo}
                    onToggle={handleToggleStatus}
                    onDelete={handleDelete}
                    isUpdating={updateTodo.isPending}
                    isDeleting={deleteTodo.isPending}
                  />
                ))}
              </ul>

              {/* Pagination */}
              <Pagination
                page={page}
                totalPages={totalPages}
                setPage={setPage}
              />
            </>
          )}
        </>
      )}
    </section>
  )
}
