import { useState, useRef, useEffect } from "react";
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
import GroupsIcon from "@mui/icons-material/Groups";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";

export default function Locations() {
  const { locations } = useUser();
  const [open, setOpen] = useState(false);
  const imageRefs = useRef([]);
  const [locationsWe, setLocationsWe] = useState([]);

  const [story, setStory] = useState({ title: "", description: "" });

  const handleClickOpen = (item) => {
    setStory({ title: item.title, description: item.description });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (item) => {
    const _item = itemData.find((i) => i.title === item);
    const index = itemData.indexOf(_item);
    imageRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api-dse00.herokuapp.com/familys/locations/ranks`
      );
      const json = await response.json();
      setLocationsWe(json.data);
      console.log(json);
    };
    fetchData();
  }, []);

  const countIcon = (i) => {
    if (i === 1) {
      return <PersonIcon />;
    }
    if (i === 2) {
      return <GroupIcon />;
    }
    if (i === 3) {
      return <GroupsIcon />;
    }
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
              <Chip label={item} onClick={() => handleClick(item)} />
            ))}
          </Box>
        )}
      </ImageListItem>
      <Box
        p="16px 8px"
        bgcolor="white"
        borderRadius="1rem"
        boxShadow="0 0 12px #ddd"
        m={2}
      >
        他們想去
        {locationsWe.length > 0 &&
          locationsWe.map((item) => (
            <>
              <Chip
                sx={{ margin: "4px 6px" }}
                label={
                  <Box display="flex" alignItems="center">
                    <Box pr="2px">{item.value}</Box>
                    {countIcon(item.count)}
                  </Box>
                }
                onClick={() => handleClick(item.value)}
              />
            </>
          ))}
      </Box>
      <ImageList>
        {itemData.map((item, index) => (
          <ImageListItem cols={2} key={item.title}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
              ref={(el) => (imageRefs.current[index] = el)}
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
