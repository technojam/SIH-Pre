import React from "react";
import {
  Card,
  Grid,
  CardActionArea,
  CardMedia,
  Stack,
  CardContent,
  Typography,
  Icon,
} from "@mui/material";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import { MenuBook } from "@mui/icons-material";
import { backgroundColor } from "./colors";
const ThemeLayout = () => {
  return (
    <Box sx={{ backgroundColor: "#070c1d" }}>
      <Typography
        sx={{ color: "#FAFAFA", py: 5 }}
        variant="h2"
        textAlign="center"
        backgroundColor="#070c1d"
      >
        THEME
      </Typography>
      <Grid container spacing={{ xs: 1, md: 3, lg: 4 }} sx={{ px: 10 }}>
        <Grid item xs={3} sm={4} md={4}>
          <Card
            sx={{
              width: 350,
              height: 380,
            }}
          >
            <Stack direction="column" spacing={2}>
              <MenuBook />
              <Typography variant="h6" sx={{ color: "#070c1d" }}>
                ThemeXOXOXO
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={3} sm={4} md={4}>
          <Card
            sx={{
              width: 350,
              height: 380,
            }}
          >
            <Stack direction="column" spacing={2}>
              <MenuBook />
              <Typography variant="h6" sx={{ color: "#070c1d" }}>
                ThemeXOXOXO
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={3} sm={4} md={4}>
          <Card
            sx={{
              width: 350,
              height: 380,
            }}
          >
            <Stack direction="column" spacing={2}>
              <MenuBook />
              <Typography variant="h6" sx={{ color: "#070c1d" }}>
                ThemeXOXOXO
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={3} sm={4} md={4}>
          <Card
            sx={{
              width: 350,
              height: 380,
            }}
          >
            <Stack direction="column" spacing={2}>
              <MenuBook />
              <Typography variant="h6" sx={{ color: "#070c1d" }}>
                ThemeXOXOXO
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={3} sm={4} md={4}>
          <Card
            sx={{
              width: 350,
              height: 380,
            }}
          >
            <Stack direction="column" spacing={2}>
              <MenuBook />
              <Typography variant="h6" sx={{ color: "#070c1d" }}>
                ThemeXOXOXO
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThemeLayout;
