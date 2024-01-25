import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
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
    <List>
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
