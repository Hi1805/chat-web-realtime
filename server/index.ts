import express from "express";
import * as dotenv from "dotenv";
import { Server } from "socket.io";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const server = require("http").Server(app);
const port = process.env.PORT || 3000;
const io = new Server(server, {
  cors: {
    origin: ["http://127.0.0.1:5500"],
  },
});
io.on("connection", (client) => {
  console.log("client connection", client.id);
  client.on("send-message", (data) => {
    io.emit("on-chat", data);
  });
});

server.listen(port, () => {
  console.log(`server listen port http://localhost:${port}`);
});
