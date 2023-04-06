import { Box, Stack } from "@mui/material";
import LuggageDialog from "../../components/Dialog";
import { useUser } from "../../Context/user";
import ParkIcon from "@mui/icons-material/Park";
import { nameMapping } from "../../constants";
export const Main = () => {
  const { user } = useUser();

  return (
    <Stack
      p={3}
      spacing={3}
      boxSizing="border-box"
      overflow={"scroll"}
      height="100vh"
    >
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

      <LuggageDialog />
    </Stack>
  );
};

export default Main;
