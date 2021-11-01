import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import ClientInput from "../components/ClientInput";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }} padding={{ xs: 0, md: 2 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={0}
          sm={0}
          md={12}
          display={{ xs: "none", sm: "none", md: "block" }}
        >
          <Box>
            <Header />
          </Box>
        </Grid>
        <Grid
          item
          xs={0}
          sm={0}
          md={3}
          lg={2}
          display={{ xs: "none", md: "block" }}
          marginTop={{ xs: 0, md: 5 }}
        >
          <Item>
            <LeftMenu />
          </Item>
        </Grid>
        <Grid item xs={12} md={9} lg={8} marginTop={{ xs: 0, md: 5 }}>
          <Item>
            <ClientInput />
          </Item>
        </Grid>
        <Grid
          item
          xs={2}
          sm={0}
          md={0}
          display={{ xs: "none", md: "none", lg: "block" }}
          marginTop={{ xs: 0, md: 5 }}
        >
          <Item>Info</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
