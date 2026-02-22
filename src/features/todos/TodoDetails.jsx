import { useParams, Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import api from "../../api/axios"

export default function TodoDetails() {
  const { id } = useParams()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["task", id],
    queryFn: async () => {
      const response = await api.get(`/tasks/${id}`)
      return response.data
    },
  })


  
  if (!data) {
    return (
      <div className="text-center py-24">
        <p className="text-gray-500 text-lg">Task not found.</p>
      </div>
    )
  }

  return (
    <>
      
        <title>{data.name} | Shukroh Todo</title>
        <meta
          name="description"
          content={`Details for task: ${data.name}`}
        />

      <section className="max-w-3xl mx-auto px-4 py-12">
        
        <Link
          to="/"
          className="text-sm text-gray-600 hover:text-blue-600 transition"
        >
          ← Back to Tasks
        </Link>

        
        <article
          className="bg-white border rounded-2xl shadow-sm p-8 mt-6"
          aria-labelledby="task-title"
        >
          
          <h1
            id="task-title"
            className="text-2xl font-bold text-gray-900"
          >
            {data.name}
          </h1>

          
          <div className="flex gap-3 mt-4 flex-wrap">
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                data.status === "DONE"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {data.status}
            </span>

            <span className="text-xs px-3 py-1 rounded-full font-medium bg-yellow-100 text-yellow-700">
              {data.priority}
            </span>
          </div>

          
          <div className="mt-8 space-y-4 text-gray-700">
            {data.description ? (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Description
                </h2>
                <p className="mt-2 text-base leading-relaxed">
                  {data.description}
                </p>
              </div>
            ) : (
              <p className="text-gray-400 italic">
                No description provided.
              </p>
            )}
          </div>
        </article>
      </section>
    </>
  )
}