import {
  createCustomer,
  deleteCustomer,
  fetchCustomer,
  fetchCustomers,
  fetchVisitingOrder,
  queryClient,
  updateCustomer,
} from "@/services/api";
import { ICustomerDTO } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useFetchCustomers() {
  return useQuery({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
  });
}

export function useFetchVisitingOrder(enabled: boolean) {
  return useQuery({
    queryKey: ["visiting-order"],
    queryFn: fetchVisitingOrder,
    enabled,
  });
}

export function useFetchCustomer(id: number) {
  return useQuery({
    queryKey: ["customer", id],
    queryFn: () => fetchCustomer(id),
    enabled: !!id,
  });
}

export function useDeleteCustomer(id: number) {
  return useMutation({
    mutationFn: () => deleteCustomer(id),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useCreateCustomer() {
  return useMutation({
    mutationFn: (data: ICustomerDTO) => createCustomer(data),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useUpdateCustomer(id: number) {
  return useMutation({
    mutationFn: (data: ICustomerDTO) => updateCustomer(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
