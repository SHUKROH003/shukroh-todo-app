import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import RouteError from "../pages/RouteError"


const TodoList = lazy(() => import("../features/todos/TodoList"));
const TodoDetails = lazy(() => import("../features/todos/TodoDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ErrorTest = lazy(() => import("../pages/ErrorTest"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <TodoList /> },
      { path: "todos/:id", element: <TodoDetails /> },
      { path: "error-test", element: <ErrorTest /> },
      { path: "*", element: <NotFound /> },
    ],
  },
])

