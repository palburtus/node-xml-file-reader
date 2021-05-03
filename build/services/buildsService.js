"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildService = void 0;
var BuildService = /** @class */ (function () {
    function BuildService() {
    }
    BuildService.prototype.getBuild = function (buildNumber) {
        return new Promise(function (resolve, reject) {
            var result = {
                number: buildNumber,
                version: 1
            };
            resolve(result);
        });
    };
    return BuildService;
}());
exports.BuildService = BuildService;
