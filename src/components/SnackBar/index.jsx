import { useEffect, forwardRef, useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useUser } from "../../Context/user";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const { noticeOpen, setNoticeOpen, notice } = useUser();

  const [open, setOpen] = useState(noticeOpen);
  useEffect(() => {
    setOpen(noticeOpen);
  }, [noticeOpen]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setNoticeOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, [notice]);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", background: "#a4cba2", boxShadow: "none" }}
        >
          {notice}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
