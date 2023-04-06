import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import { IconButton, Chip, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import LocationDialog from "../../components/LocationDialog";
import { useUser } from "../../Context/user";
import { itemData } from "../../constants";
import RoomIcon from "@mui/icons-material/Room";

export default function Locations() {
  const { locations } = useUser();
  const [open, setOpen] = useState(false);

  const [story, setStory] = useState({ title: "", description: "" });

  const handleClickOpen = (item) => {
    setStory({ title: item.title, description: item.description });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        component="h2"
        color={"primary.main"}
        display="flex"
        alignItems="center"
      >
        <RoomIcon />
        景點選擇
      </Box>

      <LocationDialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        story={story}
        setStory={setStory}
      />
      <ImageListItem key="Subheader" cols={2}>
        {locations.length < 1 ? (
          <ListSubheader component="div">已選擇景點</ListSubheader>
        ) : (
          <Box>
            {locations.map((item) => (
              <Chip label={item} />
            ))}
          </Box>
        )}
      </ImageListItem>
      <ImageList>
        {itemData.map((item) => (
          <ImageListItem cols={2} key={item.title}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              onClick={() => handleClickOpen(item)}
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{
                    color: locations.includes(item.title)
                      ? "#82e46e"
                      : "rgba(255, 255, 255, 0.8)",
                  }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
