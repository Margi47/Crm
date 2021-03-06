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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ServerValidationDirective = (function () {
    function ServerValidationDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ServerValidationDirective.prototype.ngOnChanges = function () {
        if (this.serverValidator != undefined) {
            if (this.errors.length > 0) {
                for (var i in this.errors) {
                    var item = this.errors[i];
                    var nameControl = this.serverValidator.form.get(item.key.toLowerCase());
                    nameControl.markAsDirty();
                    nameControl.setErrors((_a = {}, _a["server"] = item.reasons, _a));
                }
            }
        }
        var _a;
    };
    return ServerValidationDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.NgForm)
], ServerValidationDirective.prototype, "serverValidator", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ServerValidationDirective.prototype, "errors", void 0);
ServerValidationDirective = __decorate([
    core_1.Directive({
        selector: '[serverValidator]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], ServerValidationDirective);
exports.ServerValidationDirective = ServerValidationDirective;
//# sourceMappingURL=server-validation.directive.js.map