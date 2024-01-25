import {
  createCustomer,
  deleteCustomer,
  fetchCustomers,
  queryClient,
} from "@/services/api";
import { ICustomerDTO } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

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

export function useCreateCustomer(data: ICustomerDTO) {
  return useMutation({
    mutationFn: () => createCustomer(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });
}
