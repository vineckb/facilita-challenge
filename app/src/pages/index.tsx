import { CustomersList } from "@/components/CustomersList";
import { useFetchCustomers } from "@/hooks/api";
import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const { data, isLoading } = useFetchCustomers();
  const { push } = useRouter();

  return (
    <Wrapper>
      <Grid container justifyContent="end" gap={5}>
        <Button>Get Visiting Order</Button>
        <Button variant="contained" onClick={() => push("/create-customer")}>
          Add Customer
        </Button>
      </Grid>
      <CustomersList data={data} isLoading={isLoading} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px;
`;
