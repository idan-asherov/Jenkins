const express = require("express");
const path = require("path");
const { randomGreets } = require("./greets");

const app = express();

// Serve static files (index.html, styles.css) from current folder
app.use(express.static(__dirname));

// בדיקת תקינות השרת (Health Check)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// JSON API: ברכה רנדומלית
app.get("/api/greets", (req, res) => {
  res.json({ greets: randomGreets() });
});

// Text Response: ברכה רנדומלית ישירות כטקסט
app.get("/greets", (req, res) => {
  res.send(`${randomGreets()}`);
});

// עמוד הבית (מגיש את index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
