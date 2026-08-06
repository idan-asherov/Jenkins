const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello World! I am using docker and jenkins");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
