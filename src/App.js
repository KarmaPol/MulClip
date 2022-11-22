import logo from "./logo.svg";
import "./App.css";

import { useEffect, useImperativeHandle, useState } from "react";

import { Box, Stack, Typography, TextField, Button } from "@mui/material";

function App() {
  const [clipboards, setClipboards] = useState([
    {
      id: "c1",
      content: "",
    },
    {
      id: "c2",
      content: "",
    },
    {
      id: "c3",
      content: "",
    },
    {
      id: "c4",
      content: "",
    },
    {
      id: "c5",
      content: "",
    },
  ]);

  useEffect(() => {
    console.log(localStorage.getItem("saved"));
    console.log(clipboards);
    if (localStorage.getItem("saved") !== null) {
      setClipboards(JSON.parse(localStorage.getItem("saved")));
    }
  }, []);

  const onChangeClipboard = (e) => {
    clipboards.map((cboard) => {
      if (cboard.id === e.target.name) {
        cboard.content = e.target.value;
      }
    });
    localStorage.setItem("saved", JSON.stringify(clipboards));
    setClipboards(JSON.parse(localStorage.getItem("saved")));
    console.log(clipboards);
  };

  const onClear = () => {
    localStorage.clear();

    setClipboards([
      {
        id: "c1",
        content: "",
      },
      {
        id: "c2",
        content: "",
      },
      {
        id: "c3",
        content: "",
      },
      {
        id: "c4",
        content: "",
      },
      {
        id: "c5",
        content: "",
      },
    ]);
  };

  return (
    <div className="App">
      <Box
        sx={{
          boxSizing: "border-box",
          border: 1,
          minHeight: "500px",
          width: "350px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            width: "300px",
            mt: "16px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            멀티클립보드
          </Typography>
          <TextField
            id="c1"
            name="c1"
            label="클립보드 1"
            value={clipboards[0]?.content}
            onChange={(e) => {
              onChangeClipboard(e);
            }}
          />
          <TextField
            id="c2"
            name="c2"
            label="클립보드 2"
            value={clipboards[1]?.content}
            onChange={(e) => {
              onChangeClipboard(e);
            }}
          />
          <TextField
            id="c3"
            name="c3"
            label="클립보드 3"
            value={clipboards[2]?.content}
            onChange={(e) => {
              onChangeClipboard(e);
            }}
          />
          <TextField
            id="c4"
            name="c4"
            label="클립보드 4"
            value={clipboards[3]?.content}
            onChange={(e) => {
              onChangeClipboard(e);
            }}
          />
          <TextField
            id="c5"
            name="c5"
            label="클립보드 5"
            value={clipboards[4]?.content}
            onChange={(e) => {
              onChangeClipboard(e);
            }}
          />
          <Button
            variant="contained"
            sx={{ width: "100px", height: "30px" }}
            onClick={onClear}
          >
            초기화
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
