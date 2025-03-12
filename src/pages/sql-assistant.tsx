import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";

const SqlAssistant = (props: { window?: () => Window }) => {
  return (
    <Layout window={props.window}>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          SQL Assistant
        </Typography>
        <Typography variant="body1">
          Welcome to the SQL Assistant page. Here you can find resources and tools to help you with SQL queries and database management.
        </Typography>
      </Box>
    </Layout>
  );
};

export default SqlAssistant;
