import express from "express";

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from the server...");
});

app.listen(8080, () => {
  console.log(`🚀 App is listening on port => 8080....`);
});
