import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

const stuffs = [
  "銀包（含出發地及目的地貨幣現金、提款卡、信用卡）",
  "證件",
  "簽證",
  "登機證",
  "手提電話、手提電腦、相機 （如有鋰電池設備，建議放置於手提行李）",
  "外套",
  "拖鞋",
  "內衣褲",
  "睡衣睡褲",
  "牙膏、牙刷、牙線",
  "沐浴乳",
  "刮鬍用品",
  "醫藥用品",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Avatar
        sx={{
          bgcolor: "#cecece",
          color: "#616161",
          alignSelf: "center",
          margin: "20px",
        }}
      >
        <CloseIcon onClick={() => handleListItemClick()} />
      </Avatar>

      <DialogTitle>行李準備</DialogTitle>
      <List sx={{ pt: 0 }}>
        {stuffs.map((stuff) => (
          <ListItem disableGutters key={stuff}>
            <ListItemButton key={stuff}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={stuff} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button onClick={() => handleListItemClick()}>知道了</Button>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function LuggageDialog() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(stuffs[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box justifyContent={"center"} display="flex">
      <Button
        variant="contained"
        onClick={handleClickOpen}
        color="secondary"
        size="large"
        sx={{ borderRadius: "1rem" }}
      >
        行李準備
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Box>
  );
}
