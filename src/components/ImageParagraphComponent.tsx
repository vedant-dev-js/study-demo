import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const ImageParagraphComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Image
      height={100}
      width={100}
        src="/path/to/your/image.jpg"
        alt="Descriptive Alt Text"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
      />
      <Typography variant="body1" sx={{ marginTop: "20px", color: "grey" }}>
        This is a paragraph that describes the image above. You can add more text here to provide additional context or information about the image.
      </Typography>
    </Box>
  );
};

export default ImageParagraphComponent;
