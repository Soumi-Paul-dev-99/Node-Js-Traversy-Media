import http from "http";
const PORT = 8000;
const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
});

server.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
