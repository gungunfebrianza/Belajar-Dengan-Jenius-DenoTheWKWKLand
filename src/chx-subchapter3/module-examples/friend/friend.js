"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
var Friend = /** @class */ (function () {
    function Friend(firstName) {
        this.firstName = firstName;
    }
    return Friend;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(firstName) {
        var _this = _super.call(this, firstName) || this;
        _this.firstName = firstName;
        return _this;
    }
    return Developer;
}(Friend));
exports.Developer = Developer;
