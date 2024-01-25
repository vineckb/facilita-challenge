import { useDeleteCustomer } from "@/hooks/api";
import DeleteIcon from "@mui/icons-material/Delete";
import { CircularProgress, IconButton } from "@mui/material";

export interface DeleteButtonProps {
  id: number;
}

export function DeleteButton({ id }: DeleteButtonProps) {
  const { isPending, mutateAsync } = useDeleteCustomer(id);

  function handleClick(e: any) {
    e.preventDefault();
    e.stopPropagation();

    mutateAsync();
  }

  return (
    <IconButton onClick={handleClick} edge="end" aria-label="delete">
      {!isPending && <DeleteIcon />}
      {isPending && <CircularProgress size={20} />}
    </IconButton>
  );
}
