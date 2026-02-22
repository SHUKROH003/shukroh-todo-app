export default function App() {
  return <div>Todo App</div>
}
import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ErrorBoundary from "./components/ErrorBoundary"

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<p className="text-center mt-10">Loading page...</p>}>
          <Routes>
            <Route path="/" element={<TodoListPage />} />
            <Route path="/todos/:id" element={<TodoDetailsPage />} />
            <Route path="/test-error" element={<TestErrorPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}


