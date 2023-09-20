"use strict";
const app = require("./app");
const cors = require("cors");

const { PORT } = require("./config");
app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  console.error(err.stack);  // Log the full error
  res.status(status).json({ error: message });
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

