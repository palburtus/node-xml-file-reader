"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var buildsService_1 = require("./services/buildsService");
var app = express_1.default();
var port = 3000;
app.get('/api/build', function (req, res) {
    var buildService = new buildsService_1.BuildService();
    buildService.getBuild(9).then(function (build) {
        res.send("Build: " + build.number);
    }).catch(function (error) {
        res.send("Build: " + error);
    });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
