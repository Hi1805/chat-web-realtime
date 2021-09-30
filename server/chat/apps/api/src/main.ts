import * as express from 'express';
import * as http from 'http';
import { Server } from 'socket.io';
const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
const io = new Server(server);
io.on('connection', (client) => {
  client.on('event', (data) => {
    /* … */
  });
  client.on('disconnect', () => {
    /* … */
  });
});
server.listen(3000);
server.on('error', console.error);
