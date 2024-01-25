import { CustomersList } from "@/components/CustomersList";
import { useFetchCustomers } from "@/hooks/api";
import styled from "@emotion/styled";

export default function Home() {
  const { data, isLoading } = useFetchCustomers();

  return (
    <Wrapper>
      <CustomersList data={data} isLoading={isLoading} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px;
`;
