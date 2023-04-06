import { Box, Stack, Button, Chip } from "@mui/material";
import LuggageDialog from "../../components/Dialog";
import { useUser } from "../../Context/user";
import ParkIcon from "@mui/icons-material/Park";
import { nameMapping } from "../../constants";
import { useNavigate } from "react-router";
export const Main = () => {
  const { user, locations } = useUser();
  const navigate = useNavigate();

  const goToLocation = () => {
    navigate("/locations");
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
          <ParkIcon color="primary" />
          地點：日本大阪
        </Box>
        <Box alignItems="center" display="flex">
          <ParkIcon color="primary" />
          出發日期：27-07-2023
        </Box>
        <Box alignItems="center" display="flex">
          <ParkIcon color="primary" />
          出發時間：11:00 am
        </Box>
        <Box alignItems="center" display="flex">
          <ParkIcon color="primary" />
          回程日期：01-08-2023
        </Box>
        <Box alignItems="center" display="flex">
          <ParkIcon color="primary" />
          出發時間：12:00 am
        </Box>
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
      <Stack width="80%" bgcolor="#fff" borderRadius={3} p={3} boxShadow={1}>
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Box component={"h3"}>每人選擇景點</Box>
          {locations.length > 0 ? (
            <Chip label={"已完成"} color="success" />
          ) : (
            <Chip label={"未完成"} />
          )}
        </Box>
        <Button variant="contained" onClick={goToLocation}>
          選擇景點
        </Button>
      </Stack>
    </Stack>
  );
};

export default Main;
