const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const productsRouter = require("./src/products");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
