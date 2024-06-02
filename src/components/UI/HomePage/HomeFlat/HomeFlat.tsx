import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { purple, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Container, Grid, Tooltip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import Link from "next/link";
import { formatLocalDate } from "@/components/Shared/Date&Time/Date";

const HomeFlat = async () => {
  const res = await fetch("http://localhost:5000/api/v1/flat?page=1&limit=03");
  const { data: flats } = await res.json();

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        bgcolor: purple[100],
        clipPath: "polygon(0 0, 100% 27%, 100% 100%, 0 75%)",
      }}
    >
      <Box mb={8}>
        <Typography fontFamily="serif" variant="h3" textAlign="center">
          Our Latest{" "}
          <Box component="span" color="purple" fontFamily="serif">
            Flats
          </Box>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Container sx={{ margin: "30px auto" }}>
          <Grid container spacing={2}>
            {flats?.map((item: any) => (
              <Card
                key={item.id}
                sx={{ maxWidth: 345, margin: "auto", marginBottom: "20px" }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: purple[700] }}
                      aria-label="recipe"
                    ></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    item?.flatName?.length > 28
                      ? item?.flatName.substring(0, 28) + "..."
                      : item?.flatName
                  }
                  subheader={formatLocalDate(item?.createdAt)}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item?.flatPhoto}
                  alt="Paella dish"
                />
                <CardContent>
                  <Tooltip title={item?.description} arrow>
                    <Typography variant="body2" color="text.secondary">
                      {item?.description?.length > 170
                        ? item?.description.substring(0, 170) + "..."
                        : item?.description}
                    </Typography>
                  </Tooltip>
                </CardContent>
                <Box
                  //  display="flex"
                  // justifyContent="start"
                  margin="0"
                  padding="0 10px"
                >
                  {/*  <PriceCheckIcon /> */}

                  <Typography textAlign="start">
                    Price: {item?.rent} TK
                  </Typography>

                  <Box>
                    <Typography textAlign="start">
                      Bedrooms: {item?.totalRooms}
                    </Typography>
                  </Box>

                  {/*       <Box>Bedrooms {item?.bedRooms} TK</Box> */}
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  padding="0 10px 10px 5px"
                >
                  <Box display="flex" alignItems="center">
                    <LocationOnIcon />
                    <Typography>{item?.location}</Typography>
                  </Box>

                  <Box>
                    <Link href={`/flats/${item.id}`}>
                      <Button variant="contained">Details</Button>
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeFlat;
