import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";
import ImageParagraphComponent from "@/components/ImageParagraphComponent";

const DsaAssistant = (props: { window?: () => Window }) => {
  return (
    <Layout window={props.window}>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          DSA Assistant
        </Typography>
        <Typography variant="body1">
          Welcome to the DSA Assistant page. Here you can find resources and tools to help you with Data Structures and Algorithms.
        </Typography>
        <ImageParagraphComponent/>
      </Box>
    </Layout>
  );
};

export default DsaAssistant;
