import { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Checkbox } from "@mui/material";
import { useUser } from "../../Context/user";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function LocationDialog({
  open,
  handleClickOpen,
  handleClose,
  story,
  setStory,
}) {
  const [want, setWant] = useState(false);
  const { noticeOpen, setNoticeOpen, setNotice, setLocations, locations } =
    useUser();

  const handleWantGo = (e) => {
    handleClose();
    if (locations.includes(story.title)) {
      setNotice(`${story.title} 已取消`);
      const _locations = [...locations];
      _locations.splice(locations.indexOf(story.title), 1);

      setLocations(_locations);
    } else {
      setNotice(`已選擇 ${story.title}`);
      setLocations([...locations, story.title]);
    }
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {story.title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{story.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Checkbox
            autoFocus
            checked={locations.includes(story.title)}
            onChange={handleWantGo}
          />
          我想去這裡
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
