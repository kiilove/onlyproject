import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Grid,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

const Menus = () => {
  return (
    <Grid container>
      <List sx={{ width: "100%" }}>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text} sx={{ backgroundColor: "white" }}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Grid>
  );
};

export default Menus;
