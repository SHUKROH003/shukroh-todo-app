Todo Application
Project Overview

This is a Todo Application built with React 19 that demonstrates frontend engineering skills including API integration, routing, state management, accessibility, and UI/UX best practices.

The application allows users to create, read, update, delete, search, and filter tasks with pagination support. It integrates with a live REST API and implements modern React patterns such as Suspense and Error Boundaries.

Features
Core Features

Display todos from API with pagination (10 items per page)
View individual todo details on a nested route
Create new todos
Update todo status
Delete todos with confirmation
Search todos by title
Filter todos by status (All, Todo, Done)
Custom 404 page
Error Boundary with test route
Loading and error states for API requests
Responsive mobile-first layout


Accessibility
Semantic HTML structure
Proper ARIA attributes
Keyboard navigable interface
Focus management
Screen reader friendly labels
Accessible skip-to-content link


Technology Stack
Core Technologies
React 19 (Functional Components & Hooks)
React Router
TanStack React Query
Axios
Tailwind CSS

Architecture Decisions
React Query was used for data fetching, caching and mutation handling.
Suspense is enabled for async data loading.
Error Boundary is implemented for runtime crash handling.
Tailwind CSS provides consistent and responsive styling.
Component-based structure for maintainability and scalability.


API Integration
Base URL:
https://api.oluwasetemi.dev
Endpoints Used:
GET /todos
GET /todos/{id}
POST /todos
PUT /todos/{id}
DELETE /todos/{id}


Project Structure
src/
components/
Layout.jsx
ErrorBoundary.jsx
features/
todos/
TodoList.jsx
TodoDetails.jsx
AddTodoForm.jsx
TaskCard.jsx
SearchFilterBar.jsx
Pagination.jsx
useTodos.js
routes/
router.jsx
pages/
NotFound.jsx
RouteError.jsx
ErrorTest.jsx


Setup Instructions

1. Clone the repository
git clone <https://github.com/SHUKROH003/shukroh-todo-app>

2. Navigate into the project directory
cd todo-app

3. Install dependencies
npm install

4. Start development server
npm run dev

5. Build for production
npm run build

6. Preview production build
npm run preview

Available Scripts
npm run dev — Start development server
npm run build — Build for production
npm run preview — Preview production build
npm run lint — Run linter (if configured)

Deployment

The application is deployed on:
<https://shukroh-todo-app.vercel.app/>

Deployment platform:
Vercel

Known Issues
Authentication is not implemented.
Real-time updates are not implemented.
Offline support is not implemented.

Future Improvements
Authentication with protected routes
WebSocket integration for real-time updates
Edit form with inline editing
Toast notifications
Offline caching support
Unit and integration tests