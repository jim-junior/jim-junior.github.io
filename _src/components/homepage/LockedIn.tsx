import { Box, Typography } from "@mui/joy";
import { FaLock } from "react-icons/fa";

const LockedIn = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography level="h1" startDecorator={<FaLock />}>
        you gotta lock in
      </Typography>
    </Box>
  );
};

export default LockedIn;
