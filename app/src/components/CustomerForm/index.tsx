import {
  AppBar,
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { Controller, useForm } from "react-hook-form";
import { ICustomerDTO } from "@/types";

export interface CustomerFormProps {
  defaultValues?: ICustomerDTO;
  onSave: (data: ICustomerDTO) => void;
  isSending: boolean;
  title: string;
}

export default function CustomerForm({
  onSave,
  defaultValues,
  isSending,
  title,
}: CustomerFormProps) {
  const { control, handleSubmit } = useForm({ defaultValues });
  const { push } = useRouter();

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => push("/")}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
          <Button autoFocus color="inherit" type="submit">
            {!isSending ? "save" : <CircularProgress size={20} />}
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              error={!!error}
              helperText={
                !!error ? error.message || "This field is required" : ""
              }
              {...field}
              label="Name"
              variant="filled"
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              error={!!error}
              helperText={
                !!error ? error.message || "This field is required" : ""
              }
              {...field}
              label="E-mail"
              variant="filled"
            />
          )}
        ></Controller>
        <Controller
          control={control}
          rules={{ required: true }}
          name="phone"
          render={({ field, fieldState: { error } }) => (
            <TextField
              error={!!error}
              helperText={
                !!error ? error.message || "This field is required" : ""
              }
              {...field}
              label="Phone"
              variant="filled"
            />
          )}
        ></Controller>
        <Controller
          control={control}
          rules={{ required: true }}
          name="x"
          render={({ field, fieldState: { error } }) => (
            <TextField
              error={!!error}
              helperText={
                !!error ? error.message || "This field is required" : ""
              }
              {...field}
              label="Latitude(X)"
              variant="filled"
            />
          )}
        ></Controller>
        <Controller
          control={control}
          rules={{ required: true }}
          name="y"
          render={({ field, fieldState: { error } }) => (
            <TextField
              error={!!error}
              helperText={
                !!error ? error.message || "This field is required" : ""
              }
              {...field}
              label="Longitude(Y)"
              name="y"
              variant="filled"
            />
          )}
        ></Controller>
      </Container>
    </form>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  gap: 40px;
  display: flex;
  flex-direction: column;
`;
