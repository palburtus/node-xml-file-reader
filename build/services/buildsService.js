"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildService = void 0;
var BuildService = /** @class */ (function () {
    function BuildService() {
    }
    BuildService.prototype.getBuild = function (buildNumber) {
        return "build " + buildNumber;
    };
    return BuildService;
}());
exports.BuildService = BuildService;
