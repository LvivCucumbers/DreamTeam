const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());

app.use((req, res, next) => {
  req.date = Date.now();
  console.log(Date.now())
  next();
});

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send(`${req.date}`);
  }, 2500)
});

app.listen(3000, () => {
    console.log(`Starting\nServer is listening on 3000`);
});
