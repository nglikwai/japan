import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/user";
import { useCookies } from "react-cookie";

import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Stack,
} from "@mui/material";

export default function Home() {
  const [name, setName] = useState("");
  const [cookies, setCookie] = useCookies(["name"]);

  const navigate = useNavigate();

  const handleConfirm = () => {
    setCookie("name", name);
    navigate("/main");
  };

  return (
    <Stack
      spacing={4}
      alignItems={"center"}
      justifyContent="center"
      height="90vh"
    >
      <Box component={"h1"}>你的角色是？</Box>
      <Box>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">我是</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={name}
            label="Age"
            onChange={(e) => setName(e.target.value)}
          >
            <MenuItem value="dad">爸爸/大姑爺</MenuItem>
            <MenuItem value="mum">媽媽/大姑媽</MenuItem>
            <MenuItem value="likwai">力維</MenuItem>
            <MenuItem value="kawing">嘉穎</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        disabled={name === ""}
        variant="contained"
        onClick={handleConfirm}
        size={"large"}
      >
        確認
      </Button>
    </Stack>
  );
}
