import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/hello", (req, res) => {
  res.json("Hello World");
});

app.get("/test", async (req, res) => {
  const response = await fetch("http://localhost:3000/hello");
  const test = await response.json();
  res.send(test);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
