const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.status(200);
	res.send("Hello, everything was ok");
});

app.listen(8000, () => console.log("Server running on port 8000"));
