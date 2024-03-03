const express = require("express");
const app = express();
const PORT = 3000;

app.use("/", (req, res, next) => {
  res.json({ message: "Express app start" });
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
