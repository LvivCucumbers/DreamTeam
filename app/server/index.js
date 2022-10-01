#!/usr/bin/env node
const express = require("express");
const cors = require("cors");
const app = express();

const { argv } = require("yargs");
let iFlag = argv["i"];
let tFlag = argv["t"];

app.use(cors());

app.get("/", (req, res) => {
  let interval = setInterval(() => {
    console.log(getCurrentDate());
  }, iFlag);

  setTimeout(() => {
    clearInterval(interval);
    res.send(getCurrentDate());
  }, tFlag);
});

app.listen(3000, () => {
  console.log(`Starting\nServer is listening on 3000`);
});

function getCurrentDate() {
  let date = generateDateTime(new Date());
  return date;
}

function generateDateTime(date) {
  return date.toISOString().replace("T", " ").substring(0, 19); // yyyy-mm-dd hh-mm-ss
}
