import CustomerForm from "@/components/CustomerForm";
import { useCreateCustomer } from "@/hooks/api";
import { ICustomerDTO } from "@/types";
import { useRouter } from "next/router";

export default function CreateCustomerPage() {
  const { mutateAsync, isPending } = useCreateCustomer();
  const router = useRouter();

  async function handleSave(data: ICustomerDTO) {
    await mutateAsync(data);
    router.push("/");
  }
  return (
    <CustomerForm
      title="Create Customer"
      onSave={handleSave}
      isSending={isPending}
    />
  );
}
