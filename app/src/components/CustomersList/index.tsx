import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { DeleteButton } from "../DeleteButton";

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface CustomersListProps {
  data: Customer[];
  isLoading: boolean;
}

export function CustomersList({ data, isLoading }: CustomersListProps) {
  if (isLoading) return <p>Carregando...</p>;

  return (
    <List>
      {data.map((item, index) => (
        <ListItemButton href={`/customers/${item.id}`} key={index}>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.id} secondary={item.email} />
          <ListItemText secondary={item.phone} />

          <ListItemSecondaryAction>
            <DeleteButton id={item.id} />
          </ListItemSecondaryAction>
        </ListItemButton>
      ))}
    </List>
  );
}
