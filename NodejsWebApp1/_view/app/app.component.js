"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('../vitality/vendor/owl-carousel/owl.carousel');
var webtoon = (function () {
    function webtoon() {
    }
    webtoon.prototype.ngAfterViewInit = function () {
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.innerHTML = "console.log('done')";
        s.src = "../vitality/vendor/owl-carousel/owl.carousel.js";
        document.body.appendChild(s);
    };
    return webtoon;
}());
exports.webtoon = webtoon;
var AppComponent = (function () {
    function AppComponent() {
        this.name = "오여사";
        this.title = "hihi";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'nodejsapp',
            templateUrl: "_view/app/app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map