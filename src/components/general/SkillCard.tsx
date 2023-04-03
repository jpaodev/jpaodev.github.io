import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { maxWidth } from "@mui/system";
import ImageComponent from "./ImageComponent";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Stack,
  Modal,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface Props {
  heading: string;
  subheading: string;
  text: string;
  link?: string;
  maxWidth?: number;
  img: string;
  alt: string;
  modalText?: string;
}
export default function SkillCard({
  heading,
  subheading,
  text,
  link,
  maxWidth,
  img,
  alt,
  modalText
}: Props) {
  // maxWidth={maxWidth ? maxWidth : 2000}
  return (
    <Box
      sx={{
        m: 3,
        flex: 1,
      }}
    >
      {/* TODO: Check min size of objects */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Stack
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <Box
              component="img"
              sx={{
                height: 50,
                width: 50,
              }}
              alt={alt}
              src={img}
            />
            <Typography variant="h6">{heading}</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">{text}</Typography>
        </AccordionDetails>
      </Accordion>

      {/* </CardContent>
                <CardActions>
                    {/* <Button size="small" href={link}>Learn More</Button> */}
      {/* </CardActions> */}
      {/* </Card> */}
    </Box>
  );
}
