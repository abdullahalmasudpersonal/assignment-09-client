import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const UserProfileInfo = ({ data }: any) => {
  return (
    <>
      <Typography variant="h5" color="primary.main" mb={2}>
        Personal Information
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap={"wrap"}>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Role
          </Typography>
          <Typography>{data?.user?.role}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Name
          </Typography>
          <Typography>{data?.name}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Email
          </Typography>
          <Typography>{data?.email}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Profession
          </Typography>
          <Typography>{data?.profession}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Address
          </Typography>
          <Typography>{data?.address}</Typography>
        </StyledInformationBox>
         <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Status
          </Typography>
          <Typography>{data?.user?.status}</Typography>
        </StyledInformationBox> 
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Bio
          </Typography>
          <Typography>{data?.bio}</Typography>
        </StyledInformationBox>
      </Stack>
    </>
  );
};

export default UserProfileInfo;
