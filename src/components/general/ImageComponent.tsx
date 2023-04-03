import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
interface ImgProps {
  src: string;
  alt: string;
}
const ImageComponent: React.FC<ImgProps> = ({ src, alt }) => {
  return <Avatar src={src} alt={alt} sx={{ height: 50 }} />;
};

export default ImageComponent;
