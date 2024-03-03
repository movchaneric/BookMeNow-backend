const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use("/", (req, res, next) => {
  res.json({ message: "Express app start" });
});

mongoose
  .connect(
    "mongodb+srv://movchaneric:YBTvrVp8vgu95WvM@tododb.oiusd5y.mongodb.net/World-Oasis?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server is listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
