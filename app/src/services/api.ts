import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export async function fetchCustomers() {
  const response = await api.get("/customers");

  return response.data;
}

export async function deleteCustomer(id: number) {
  return api.delete(`/customers/${id}`);
}

export function useFetchCustomers() {
  return useQuery({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
  });
}

export function useDeleteCustomer(id: number) {
  return useMutation({
    mutationFn: () => deleteCustomer(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });
}
