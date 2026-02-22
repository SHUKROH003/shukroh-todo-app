import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import api from "../../api/axios"

// GET TASKS
export function useTodos(page, search, status) {
  return useQuery({
    queryKey: ["tasks", page, search, status],
    queryFn: async () => {
      const params = {
        page,
        limit: 10,
      }

      if (search) params.search = search
      if (status) params.status = status

      const response = await api.get("/tasks", { params })
      return response.data
    },
  })
}

// CREATE TASK
export function useCreateTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newTask) => {
      const response = await api.post("/tasks", newTask)
      return response.data
    },
    onSuccess: () => {
      // Refetch all task lists
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
    },
  })
}

/* ---------------- UPDATE TASK ---------------- */

export function useUpdateTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, updatedData }) => {
      const response = await api.put(`/tasks/${id}`, updatedData)
      return response.data
    },

    onSuccess: () => {
      // Refetch all task queries
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
    },
  })
}

/* ---------------- DELETE ---------------- */
export function useDeleteTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id) => {
      await api.delete(`/tasks/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
    },
  })
}