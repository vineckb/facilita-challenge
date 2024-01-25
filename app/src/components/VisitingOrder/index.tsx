import React from "react";
import Button from "@mui/material/Button";
import { VisitingOrderDialog } from "./Dialog";

export default function VisitingOrder() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Get Visiting Order
      </Button>
      <VisitingOrderDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
