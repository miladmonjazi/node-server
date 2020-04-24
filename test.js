let http = require("http")

let ourApp = http.createServer(function(req, res) {
  if (req.url == "/") {
    res.end("Hello, and welcome to our home page.")
  }

  if (req.url == "/about") {
    res.end("Thamk you for the interest in our company.")
  }

  res.end("We cannot find the page you are looking for.")
})

ourApp.listen(3000)
