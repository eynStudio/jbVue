"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_property_decorator_1 = require("vue-property-decorator");
var tpl = require("./dlg.htm");
var Dlg = (function (_super) {
    __extends(Dlg, _super);
    function Dlg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dlg;
}(vue_1.default));
__decorate([
    vue_property_decorator_1.Prop,
    __metadata("design:type", String)
], Dlg.prototype, "title", void 0);
__decorate([
    vue_property_decorator_1.Prop,
    __metadata("design:type", Boolean)
], Dlg.prototype, "rmClose", void 0);
Dlg = __decorate([
    vue_property_decorator_1.Component({ template: tpl, components: {} })
], Dlg);
exports.Dlg = Dlg;
//# sourceMappingURL=Dlg.js.map