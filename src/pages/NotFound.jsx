import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist."
        />

      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-gray-600">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </>
  )
}