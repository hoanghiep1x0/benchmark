const http = require("http");
const chalk = require("chalk");
const url = require("url");
const controller = new(require("../controller"))();


var server = http.createServer();
server.on("request", (req, res) => {
    var urlParts = url.parse(req.url, true);
    var method = req.method;
    var path = urlParts.pathname;

    if (path == "/hello-world" && method == "GET") {
        res.end(controller.helloWorld());
    } else if (path == "/get-query" && method == "GET") {
        var {
            arg1,
            arg2
        } = urlParts.query;
        res.end(controller.getQuery(arg1, arg2));
    } else if (patch == "/post-raw" && method == "POST") {
        var temp = new Buffer();
        req.on("data", (chunk)=>{
            temp.con
        })
    } else {
        res.writeHead(404);
        res.end("not found !");
    }
});

server.listen(5003, "0.0.0.0", () => {
    console.log(chalk.green("\n✔  NodeJS server started at : http://localhost:5003"))

});