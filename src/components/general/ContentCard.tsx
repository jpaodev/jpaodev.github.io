import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface Props {
  heading: string;
  subheading: string;
  text: string;
  link?: string;
  maxWidth?: number;
  image?: string;
}
export default function ContentCard({
  heading,
  subheading,
  text,
}: Props) {
  // maxWidth={maxWidth ? maxWidth : 2000}
  return (
    <Box sx={{ margin: 3 }}>
      <Typography variant="h5" component="div">
        {heading}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {subheading}
      </Typography>
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
}

// {/*
//         <Card sx={{ flex: 1 }} variant="outlined"><CardContent> */}

// {/* </CardContent>
//                 <CardActions>
//                     <Button size="small" href={link}>Learn More</Button>
//                 </CardActions></Card> */}
