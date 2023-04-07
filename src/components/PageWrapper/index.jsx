import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { useUser } from "../../Context/user";
import { useNavigate } from "react-router-dom";
import SimpleBottomNavigation from "../BottomNavigation";
import SimpleSnackbar from "../SnackBar";
import { useCookies } from "react-cookie";

export const PageWrapper = ({ children }) => {
  const navigate = useNavigate();

  const { user, setUser, setNotice, setLocations, locations } = useUser();
  const [cookies, setCookie] = useCookies(["name"]);

  useEffect(() => {
    if (cookies.name && window.location.pathname.length === 1) {
      console.log("likwai back");
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api-dse00.herokuapp.com/familys/${user}`
      );
      const json = await response.json();
      setLocations(json.data.locations);
    };
    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <Stack width="100vw" boxSizing="border-box" bgcolor={"#f9f9f9"}>
      <Box height="90vh" boxSizing="border-box" overflow="scroll">
        {children}
      </Box>

      <SimpleSnackbar />

      <Box
        height="10vh"
        sx={{
          width: "100vw",
          background: "white",
        }}
        boxSizing="border-box"
        boxShadow="0 0 20px #ddd"
      >
        <SimpleBottomNavigation />
      </Box>
    </Stack>
  );
};

export default PageWrapper;
