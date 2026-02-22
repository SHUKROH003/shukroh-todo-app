export default function Pagination({
  page,
  totalPages,
  setPage,
}) {
  return (
    <div className="flex justify-between items-center mt-10">
      <button
        onClick={() => setPage((p) => p - 1)}
        disabled={page === 1}
        className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 transition"
      >
        Previous
      </button>

      <span className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={page >= totalPages}
        className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50 transition"
      >
        Next
      </button>
    </div>
  )
}