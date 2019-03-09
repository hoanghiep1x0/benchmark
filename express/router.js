const app = require("express")();
const chalk = require("chalk");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer({
    dest: 'uploads/'
});


const handler = new(require("../controller"))();

app.use(cookieParser());
app.use(bodyParser.urlencoded({}));
app.use(bodyParser.raw({
    limit: "2000MB"
}));


app.get("/hello-world", (req, res) => {
    res.end(handler.helloWorld());
});

app.get("/get-query", (req, res) => {
    var {
        arg1,
        arg2
    } = res.query;
    res.end(handler.getQuery(arg1, arg2));
})

app.get("/get-cookie-data", (req, res) => {
    res.end(handler.getCookieData(res.cookies));
})

app.post("/post-raw", (req, res) => {
    res.end(handler.postRaw(res.body));
})

app.post("/post-urlencoded", (req, res) => {
    var {
        arg1,
        arg2
    } = req.body;
    res.end(handler.postUrlencoded(arg1, arg2));
})

app.post("/post-multipart", upload.fields(["arg1", "arg2"]), (req, res) => {
    var {
        arg1,
        arg2
    } = req.body;
    res.end(handler.postMultipart(arg1, arg2));
})

app.get("/rest-params/:arg1/:arg2", (req, res) => {
    var {
        arg1,
        arg2
    } = req.params;
    res.end(handler.restParams(arg1, arg2))
})

app.listen(5002, () => {
    console.log(chalk.green("\n✔  Express server started at : http://localhost:5002"))
});