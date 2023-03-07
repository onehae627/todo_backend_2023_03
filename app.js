import express from "express";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: "https://naver.io",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
  app.use(cors(corsOptions));


const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", (req, res) => {
    res.json([{id : 1 }, {id: 2 }]);
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});