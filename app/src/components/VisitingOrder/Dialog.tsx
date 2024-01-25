import { useFetchVisitingOrder } from "@/hooks/api";
import { ICustomerEntity } from "@/types";
import PersonIcon from "@mui/icons-material/Person";
import {
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export interface VisitingOrderDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}
const emails = ["username@gmail.com", "user02@gmail.com"];

export function VisitingOrderDialog({
  onClose,
  open,
}: VisitingOrderDialogProps) {
  const { data, isLoading } = useFetchVisitingOrder(open);

  if (isLoading || !data) return null;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Visiting Order</DialogTitle>
      <List sx={{ p: 4 }}>
        {data?.route.map((item: ICustomerEntity, index: number) => (
          <ListItem disableGutters key={index}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.email} />
            <ListItemText secondary={item.phone} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
