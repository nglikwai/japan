import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../Context/user";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useUser;
  useEffect(() => {
    if (value === 0) {
      navigate("plan");
    }
    if (value === 1) {
      navigate("main");
    }
    if (value === 2) {
      navigate("locations");
    }
    if (value === 3) {
      navigate("album");
    }
  }, [value, user, navigate]);
  return (
    <Box boxShadow={4}>
      {location.pathname !== "/" && (
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="行程" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="首頁" icon={<HomeIcon />} />
          <BottomNavigationAction label="地點" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="相冊" icon={<PhotoLibraryIcon />} />
        </BottomNavigation>
      )}
    </Box>
  );
}
