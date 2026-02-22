import { useRouteError, Link } from "react-router-dom"

export default function RouteError() {
  const error = useRouteError()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-red-600">
        Oops! Something went wrong.
      </h1>

      <p className="mt-2 text-gray-600">
        {error?.statusText || error?.message}
      </p>

      <Link to="/" className="mt-4 text-blue-600 underline">
        Go back home
      </Link>
    </div>
  )
}