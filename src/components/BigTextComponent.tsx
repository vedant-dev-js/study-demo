import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

const BigTextComponent = () => {
  const [text, setText] = useState("");
  const fullText = "Keep Coding, Keep Growing!";
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delay = 2000;
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    let index = 0;
    let isErasing = false;

    const type = () => {
      if (isMounted) {
        if (isErasing) {
          if (index > 0) {
            setText(fullText.substring(0, index - 1));
            index--;
            setTimeout(type, erasingSpeed);
          } else {
            isErasing = false;
            setTimeout(type, delay);
          }
        } else {
          if (index < fullText.length) {
            setText(fullText.substring(0, index + 1));
            index++;
            setTimeout(type, typingSpeed);
          } else {
            isErasing = true;
            setTimeout(type, delay);
          }
        }
      }
    };

    type();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path).then(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography
        variant="h1"
        gutterBottom
        fontWeight={"700"}
        sx={{ transition: "all 1s ease", minHeight: "20vh" }}
      >
        {text}
      </Typography>
      <Typography variant="body1" sx={{ fontStyle: "italic", color: "grey" }}>
        This is the first line of the paragraph. This is the second line of the paragraph.
      </Typography>
      <Typography variant="body1" sx={{ fontStyle: "italic", color: "grey" }}>
        This is the third line of the paragraph.
      </Typography>
      <Box sx={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor:'black',
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "8px",
            '&:hover': {
              backgroundColor: "grey",
            },
          }}
          onClick={() => handleNavigation("/dsa-assistant")}
        >
          DSA Assistant
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor:'black',
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px", 
            fontWeight: "bold",
            borderRadius: "8px",
            '&:hover': {
              backgroundColor: "grey",
            },
          }}
          onClick={() => handleNavigation("/sql-assistant")}
        >
          SQL Assistant
        </Button>
      </Box>
    </Box>
  );
};

export default BigTextComponent;
