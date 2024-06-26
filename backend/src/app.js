const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const router = require("./router");

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin:
      process.env.FRONTEND_URL ??
      "https://dc-comiques-qq1mokvae-gessyboys-projects.vercel.app/",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use(router);

// Redirect all requests to the REACT app
const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html",
  "style.css"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export
module.exports = app;
