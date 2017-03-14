import http from "http";
import express from "express";

const PORT = 8080;

const reverse = s => s.split("").reverse().join("");

async function start() {
  const app = express();
  app.server = http.createServer(app);

	app.get("/api/reverse/:something", (req, res) => {
    const something = req.params.something;
		const reversed = reverse(something);
    res.json(reversed);
  });

  app.server.listen(PORT);
  console.log(`API started on port ${app.server.address().port}`);
}

start();
