const express = require("express");
// To load env vars so that i dont have to put creds into the code
require("dotenv").config();

// create the app
const app = express();
const PORT = process.env.PORT || 54321;

app.listen(PORT, () => {
  console.log(`\nServer started and listening on port ${PORT}\n`);
});
