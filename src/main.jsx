import "./index.css"
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"
import ErrorBoundary from "./components/ErrorBoundary"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-500 animate-pulse">
                  Loading page...
                </p>
              </div>
            
            }
          >
            <RouterProvider router={router} />
          </Suspense>
        </ErrorBoundary>
      </QueryClientProvider>
  </React.StrictMode>
)


