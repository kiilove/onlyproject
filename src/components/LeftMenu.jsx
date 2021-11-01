import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Grid,
  Box,
  Typography,
} from "@mui/material";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

const LeftMenu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AddBusinessIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography>거래처관리</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AutoAwesomeMotionIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography>품목관리</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftMenu;
