import { Component } from "react"
import { Link } from "react-router-dom"

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Something went wrong
          </h1>

          <p className="text-gray-600 mb-6">
            An unexpected error occurred. You can try again or return home.
          </p>

          <div className="flex gap-4">
            <button
              onClick={this.handleReset}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Try Again
            </button>

            <Link
              to="/"
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Go Home
            </Link>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
