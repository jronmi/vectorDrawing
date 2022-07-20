/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");


// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();


// |------------------------------|
// | write your API methods below!|
// |------------------------------|
router.get("/test", (req, res) => {
  console.log("Test API was called!");
  res.status(200).send({msg: "hello"});
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
