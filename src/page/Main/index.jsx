import { Box, Stack, Button, Chip } from "@mui/material";
import LuggageDialog from "../../components/Dialog";
import { useUser } from "../../Context/user";
import ParkIcon from "@mui/icons-material/Park";
import { nameMapping } from "../../constants";
import { useNavigate } from "react-router";
import FlightIcon from "@mui/icons-material/Flight";
export const Main = () => {
  const { user, locations, setValue } = useUser();
  const navigate = useNavigate();

  const goToLocation = () => {
    setValue(1);
  };
  return (
    <Stack p={3} spacing={3} boxSizing="border-box" overflow={"scroll"}>
      <Box component={"h1"} sx={{ color: "primary.main" }}>
        你好 {nameMapping[user]?.name}
      </Box>
      <Box>
        <ParkIcon color="primary" />
        以下是你的行程
      </Box>
      <Stack
        spacing={3}
        width="80%"
        bgcolor="#fff"
        borderRadius={3}
        p={3}
        boxShadow={1}
      >
        <Box>機票編號</Box>
        <Box
          component={"h1"}
          sx={{
            color: "primary.main",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {nameMapping[user]?.reference}
        </Box>
        <Box alignItems="center" display="flex">
          <FlightIcon color="primary" />
          航班：UO 862
        </Box>
        <Box alignItems="center" display="flex">
          <ParkIcon color="primary" />
          地點：香港 - 日本大阪
        </Box>
        <Box alignItems="center" display="flex">
          <ParkIcon color="primary" />
          出發日期：27-07-2023
        </Box>
        <Box alignItems="center" display="flex">
          <ParkIcon color="primary" />
          出發時間：15:40 pm
        </Box>
      </Stack>
      <Stack
        width="80%"
        bgcolor="#fff"
        borderRadius={3}
        p={3}
        boxShadow={1}
        spacing={2}
      >
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Box component={"h3"}>每人選擇景點</Box>
          {locations.length > 0 ? (
            <Chip label={"已完成"} color="success" />
          ) : (
            <Chip label={"緊急"} color="error" />
          )}
        </Box>
        {locations.length > 0 && (
          <>
            <Box>
              <Box component={"span"} pr={1}>
                我想去
              </Box>
              {locations.map((item) => (
                <Chip label={item} sx={{ marginRight: "10px" }} />
              ))}
            </Box>
          </>
        )}
        <Button variant="contained" onClick={goToLocation}>
          選擇景點
        </Button>
      </Stack>
      <Stack width="80%" bgcolor="#fff" borderRadius={3} p={3} boxShadow={1}>
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Box component={"h3"}>準備行李</Box> <Chip label={"未完成"} />
        </Box>
        <LuggageDialog />
      </Stack>

      <Stack
        spacing={3}
        width="80%"
        bgcolor="#fff"
        borderRadius={3}
        p={3}
        boxShadow={1}
      >
        <Box component={"h3"}>回程機票</Box>
        <Box
          component={"h1"}
          sx={{
            color: "primary.main",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {nameMapping[user]?.reference}
        </Box>
        <Box alignItems="center" display="flex">
          <FlightIcon color="primary" />
          航班：UO 687
        </Box>
        <Box alignItems="center" display="flex">
          <ParkIcon color="primary" />
          地點：日本大阪 - 香港
        </Box>
        <Box alignItems="center" display="flex">
          <ParkIcon color="primary" />
          出發日期：01-08-2023
        </Box>
        <Box alignItems="center" display="flex">
          <ParkIcon color="primary" />
          出發時間：15:40 pm
        </Box>
      </Stack>
    </Stack>
  );
};

export default Main;
