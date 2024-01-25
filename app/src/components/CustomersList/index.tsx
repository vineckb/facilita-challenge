import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { DeleteButton } from "../DeleteButton";
import { ICustomerEntity } from "@/types";

export interface CustomersListProps {
  data: ICustomerEntity[];
  isLoading: boolean;
}

export function CustomersList({ data, isLoading }: CustomersListProps) {
  if (isLoading || !data) return <p>Carregando...</p>;
  console.log("dataaaa", data);

  return (
    <List sx={{ mt: 5 }}>
      {data.length < 1 && (
        <ListItemButton href="/create-customer">
          <ListItemAvatar>
            <AddIcon />
          </ListItemAvatar>
          <ListItemText
            primary="Empty List"
            secondary="Start adding customers"
          />
        </ListItemButton>
      )}
      {data?.map((item, index) => (
        <ListItemButton href={`/customer/${item.id}`} key={index}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={item.email} />
          <ListItemText secondary={item.phone} />

          <ListItemSecondaryAction>
            <DeleteButton id={item.id} />
          </ListItemSecondaryAction>
        </ListItemButton>
      ))}
    </List>
  );
}
