import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import { Box, Link as JoyLink, Stack } from "@mui/joy";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function TVShowCard({ show }) {
  return (
    <Card sx={{ borderRadius: 0 }}>
      <CardOverflow>
        <AspectRatio>
          <img src={show.image} />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ gap: 1 }}>
        <Typography level="title-lg">{show.title}</Typography>
        <Typography level="body-sm">{show.description}</Typography>
      </CardContent>
    </Card>
  );
}
