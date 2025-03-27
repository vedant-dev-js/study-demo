import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import Image from "next/image";
import DSA from "../images/big-data-analytics-flowchart_1284-32903.jpg";

const ImageParagraphComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        textAlign: "left",
        padding: "20px 0px",
        gap: "20px",
      }}
    >
      <Image
        height={500}
        width={500}
        src={DSA}
        alt="Descriptive Alt Text"
        style={{ borderRadius: "8px" }}
      />
      <Box>
        <Typography variant="h5" gutterBottom>
          DSA Assistant
        </Typography>
        <Typography variant="body1" sx={{ color: "grey", marginBottom: "20px" }}>
          A DSA (Data Structures and Algorithms) Assistant is a tool or software designed to help developers and students practice, optimize, and improve their understanding of DSA concepts. DSA is crucial for problem-solving in computer science and is commonly tested in coding interviews.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Features of DSA Assistants:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Problem Recommendations – Suggests coding problems based on difficulty level and topic (arrays, linked lists, trees, graphs, dynamic programming, etc.)." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Code Autocompletion & Debugging – Helps users write, test, and debug DSA-related code efficiently." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Algorithm Visualization – Provides graphical representations of sorting, searching, and pathfinding algorithms for better understanding." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Performance Analysis – Analyzes time and space complexity to improve code efficiency." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Mock Interviews & Challenges – Offers coding contests and timed challenges to prepare for real-world scenarios." />
          </ListItem>
        </List>
        <Typography variant="body1" sx={{ color: "grey", marginTop: "20px" }}>
          These features make DSA Assistants invaluable for developers and students aiming to excel in coding interviews and improve their problem-solving skills.
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageParagraphComponent;
