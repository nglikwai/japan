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
import { nameMapping } from "../../constants";
import { Avatar } from "@mui/material";

export default function SimpleBottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, value, setValue } = useUser();

  useEffect(() => {
    if (value === 0) {
      navigate("plan");
    }
    if (value === 1) {
      navigate("locations");
    }
    if (value === 2) {
      navigate("main");
    }
    if (value === 3) {
      navigate("album");
    }
    if (value === 4) {
      navigate("setting");
    }
  }, [value, user, navigate]);
  return (
    <Box
      boxShadow={4}
      boxSizing="border-box"
      maxWidth="100vw"
      sx={{ background: "white" }}
    >
      {location.pathname !== "/" && (
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ boxSizing: "border-box", maxWidth: "97vw" }}
        >
          <BottomNavigationAction label="行程" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="景點" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="首頁" icon={<HomeIcon />} />
          <BottomNavigationAction label="相冊" icon={<PhotoLibraryIcon />} />
          <BottomNavigationAction
            icon={
              <Avatar
                alt="Remy Sharp"
                src={`/static/images/${user}.png`}
                sx={{ padding: "0 0" }}
              />
            }
          />
        </BottomNavigation>
      )}
    </Box>
  );
}
