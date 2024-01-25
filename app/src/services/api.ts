import { ICustomerDTO } from "@/types";
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
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

export function deleteCustomer(id: number) {
  return api.delete(`/customers/${id}`);
}

export async function createCustomer(data: ICustomerDTO) {
  const response = await api.post("/customers", { data });
  return response.data;
}
