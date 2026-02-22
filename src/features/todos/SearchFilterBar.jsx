export default function SearchFilterBar({
  search,
  setSearch,
  status,
  setStatus,
  setPage,
}) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 mb-8 flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search tasks"
      />

      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value)
          setPage(1)
        }}
        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Filter tasks by status"
      >
        <option value="">All</option>
        <option value="TODO">Todo</option>
        <option value="DONE">Done</option>
      </select>
    </div>
  )
}