import { useRouter } from "next/router";
import CustomerForm from "@/components/CustomerForm";
import { useFetchCustomer, useUpdateCustomer } from "@/hooks/api";
import { ICustomerDTO } from "@/types";

export default function EditCustomerPage() {
  const router = useRouter();
  const id = router.query.id as unknown as number;
  const { data, isLoading } = useFetchCustomer(id);
  const { mutateAsync, isPending } = useUpdateCustomer(id);

  async function handleSave(data: ICustomerDTO) {
    await mutateAsync(data);
    router.push("/");
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <CustomerForm
      title="Edit Customer"
      defaultValues={data}
      onSave={handleSave}
      isSending={isPending}
    />
  );
}
