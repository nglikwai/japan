import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { useUser } from "../../Context/user";
import { useNavigate } from "react-router-dom";
import SimpleBottomNavigation from "../BottomNavigation";
import SimpleSnackbar from "../SnackBar";
import { useCookies } from "react-cookie";

export const PageWrapper = ({ children }) => {
  const navigate = useNavigate();

  const { user, setUser, setNotice } = useUser();
  const [cookies, setCookie] = useCookies(["name"]);

  useEffect(() => {
    if (cookies.name && window.location.pathname.length === 1) {
      setUser(cookies.name);
      navigate("/main");
      setNotice("歡迎回來");
    } else if (!cookies.name) {
      navigate("/");
    } else {
      setUser(cookies.name);
      setNotice("歡迎回來");
    }
  }, [cookies.name, navigate, setUser, setNotice]);

  return (
    <Stack width="100vw" boxSizing="border-box" bgcolor={"#f9f9f9"}>
      {children}

      <SimpleSnackbar />
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          width: "100vw",
        }}
      >
        <SimpleBottomNavigation />
      </Box>
    </Stack>
  );
};

export default PageWrapper;
