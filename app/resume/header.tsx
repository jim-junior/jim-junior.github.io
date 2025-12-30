import { Box, Button, Divider, Typography } from "@mui/joy";
import { FaPrint } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography level="title-lg">Curriculum Vitae</Typography>
        <Button
          sx={{
            ml: "auto",
          }}
          startDecorator={<FaPrint />}
        >
          Print/Save PDF
        </Button>
      </Box>
      <Divider />
    </div>
  );
};

export default Header;
