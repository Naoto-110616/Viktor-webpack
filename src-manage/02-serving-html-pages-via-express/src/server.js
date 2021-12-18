const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.get("/", function (req, res) {
	const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
	const contactFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
	res.send(contactFromHtmlFile);
});

app.listen(3000, function () {
	console.log("Application is running  on  http://localhost:3000/");
});
