import { useState } from "react";

import { IconButton, Chip, Box, Stack, Avatar } from "@mui/material";

import { useUser } from "../../Context/user";
import { itemData, nameMapping } from "../../constants";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";

export default function Locations() {
  const { locations, user } = useUser();
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
    <Stack p={3}>
      <Box
        component="h2"
        color={"primary.main"}
        display="flex"
        alignItems="center"
      >
        <SettingsIcon />
        設置
      </Box>
      <Stack display="flex" alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src={`/static/images/${user}.png`}
          sx={{ width: 200, height: 200 }}
        />
        <Box component={"h3"}>{nameMapping[user]?.name}</Box>
        <Box
          component={"h3"}
          display="flex"
          alignItems="center"
          sx={{ alignSelf: "flex-start" }}
        >
          <GroupIcon />
          <Box pl={1}>成員</Box>
        </Box>
        <Stack
          spacing={2}
          width="100%"
          sx={{
            background: "white",
            padding: "1rem",
            borderRadius: "1rem",
            boxShadow: "0 0 20px #ddd",
          }}
        >
          {Object.keys(nameMapping)
            .filter((i) => i !== user)
            .map((i) => {
              return {
                id: i,
                ...nameMapping[i],
              };
            })
            .map((i) => (
              <Box display="flex" alignItems="center" key={i.id}>
                <Avatar
                  alt="Remy Sharp"
                  src={`/static/images/${i.id}.png`}
                  sx={{ width: 100, height: 100 }}
                />
                <Box pl={3}>{i.name}</Box>
              </Box>
            ))}
        </Stack>
        <Box
          component={"h3"}
          display="flex"
          alignItems="center"
          sx={{ alignSelf: "flex-start" }}
        >
          <GroupIcon />
          <Box pl={1}>個人化設置</Box>
        </Box>
        <Stack
          spacing={2}
          width="100%"
          sx={{
            background: "white",
            padding: "1rem",
            borderRadius: "1rem",
            boxShadow: "0 0 20px #ddd",
          }}
        >
          <Box p="0.7rem" borderBottom="1px solid #ddd">
            字體大小
          </Box>
          <Box p="0.7rem">黑夜模式</Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
