const hyron = require("hyron");

var app = hyron.getInstance(5001);

app.enableServices({
    "" : "./controller.js"
});

app.startServer();