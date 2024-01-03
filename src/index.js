require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

// const port = 3000
// app.listen(port, () => {
//   console.log(`A porta ${port} está ON e OK`);
// });

app.get("/teste", (req, res) => {
  return res.send("teste de servidor");
});

app.listen(3000);
