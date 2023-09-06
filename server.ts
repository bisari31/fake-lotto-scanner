const http = require("http");
const https = require("https");
const fs = require("fs");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const PORT = 3001;
const app = next({ dev, hostname: "localhost", port: PORT });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT, () => {
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  const options = {
    key: fs.readFileSync("./localhost-key.pem"),
    cert: fs.readFileSync("./localhost.pem"),
  };

  https
    .createServer(options, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT + 1, () => {
      console.log(`> Ready on https://localhost:${PORT + 1}`);
    });
});
