const express = require("express");
const messageController = require("../controllers/messages_controller");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static(__dirname + "../public/build"));

app.post("/api/messages", messageController.create);
app.get("/api/messages", messageController.read);
app.put("/api/messages/:id", messageController.update);
app.delete("/api/messages/:id", messageController.delete);

app.listen(PORT, () => {
  console.log("Server is listening on " + PORT);
});
