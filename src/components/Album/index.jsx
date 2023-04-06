import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Box } from "@mui/system";
import { itemData } from "../../constants";

export default function Album() {
  return (
    <>
      <ImageList cols={1}>
        <Box
          component={"h1"}
          color={"primary.main"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <PhotoLibraryIcon fontSize="1" />
          <Box sx={{ alignSelf: "center" }}>相冊</Box>
        </Box>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
