import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import Layout from "../components/Layout";
import SQL from "../images/abstract-technology-sql-illustration_23-2149238125.jpg";
import Image from "next/image";

const SqlAssistant = (props: { window?: () => Window }) => {
  return (
    <Layout window={props.window} >
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
          src={SQL}
          alt="Descriptive Alt Text"
          style={{ borderRadius: "8px" }}
        />
        <Box>
          <Typography variant="h5" gutterBottom>
            SQL Assistant
          </Typography>
          <Typography variant="body1" sx={{ color: "grey", marginBottom: "20px" }}>
            An SQL Assistant is a tool or software designed to help users write, optimize, and manage SQL queries efficiently. SQL (Structured Query Language) is used to interact with relational databases, enabling users to store, retrieve, update, and delete data systematically.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Features of SQL Assistants:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Query Autocompletion – Suggests SQL syntax and table/column names to speed up query writing." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Query Optimization – Helps analyze and optimize queries for better performance." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Database Exploration – Allows users to browse database schemas, tables, and relationships." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Debugging & Error Handling – Highlights syntax errors and suggests fixes." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Execution Insights – Displays query execution plans and performance metrics." />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ color: "grey", marginTop: "20px" }}>
            Popular SQL assistants include Microsoft SQL Server Management Studio (SSMS), MySQL Workbench, DBeaver, and pgAdmin. These tools help database administrators, developers, and analysts manage large datasets efficiently.
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default SqlAssistant;
