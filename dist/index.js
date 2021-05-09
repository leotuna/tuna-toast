"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toast = void 0;
var Toast = /** @class */ (function () {
    function Toast() {
        var _this = this;
        this.container = "toast-container";
        this.id = 0;
        this.success = function (message) {
            _this.run(message, "toast--success");
        };
        this.error = function (message) {
            _this.run(message, "toast--error");
        };
        this.close = function (id) {
            var element = document.getElementById(id);
            if (!element) {
                return;
            }
            element.remove();
        };
        this.autoClose = function (id, time) {
            if (time === void 0) { time = 3000; }
            setTimeout(function () { return _this.close(id); }, time);
        };
        this.run = function (message, className) {
            var toast = document.createElement("div");
            toast.classList.add("toast", className);
            toast.innerText = message;
            toast.id = "toast-" + _this.id;
            toast.onclick = function () { return _this.close(toast.id); };
            _this.id++;
            var container = document.getElementById(_this.container);
            if (!container) {
                throw new Error("Could not find toast container to append toast message.");
            }
            container.appendChild(toast);
            _this.autoClose(toast.id);
        };
        this.init = function () {
            var body = document.querySelector("body");
            if (!body) {
                throw new Error("Could not find body to append toast container.");
            }
            body.insertAdjacentHTML("beforeend", "<div id='toast-container'></div>");
        };
        this.init();
    }
    return Toast;
}());
exports.toast = new Toast();
