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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var doc_1 = require('./doc');
var doc_service_1 = require('./doc.service');
var forms_1 = require('@angular/forms');
require('rxjs/add/operator/switchMap');
var DocDetailComponent = (function () {
    function DocDetailComponent(docService, route, location, fb) {
        this.docService = docService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.docForm = this.fb.group({
            number: ["", forms_1.Validators.required],
            description: ["", forms_1.Validators.required]
        });
    }
    ;
    DocDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //noinspection TypeScriptValidateTypes
        this.route.params
            .switchMap(function (params) {
            _this.id = +params['id'];
            return _this.docService.getDoc(_this.id);
        })
            .subscribe(function (doc) { return _this.doc = doc; });
    };
    ;
    DocDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DocDetailComponent.prototype.save = function () {
        var _this = this;
        if (this.id == 0)
            this.docService.create(this.doc)
                .then(function () { return _this.goBack(); });
        else {
            this.docService.update(this.doc)
                .then(function () { return _this.goBack(); });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', doc_1.Doc)
    ], DocDetailComponent.prototype, "doc", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DocDetailComponent.prototype, "id", void 0);
    DocDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-doc-detail',
            template: "\n    <div *ngIf =\"doc\"  class=\"form-content\" [formGroup]=\"docForm\">\n      <div class=\"sd-form-control\">\n          <label>id: </label>{{id}}\n      </div>\n      <div>\n        <label>Number: \n            <input type=\"text\" [(ngModel)]=\"doc.number\" formControlName=\"number\" class=\"sd-form-control\" placeholder=\"Enter doc's number.\">\n        </label>\n      </div>\n      <div>\n        <label>Description: \n            <textarea [(ngModel)]=\"doc.description\" formControlName=\"description\" class=\"sd-form-control\" placeholder=\"Description here.\"></textarea>\n        </label>\n      </div>\n    <button (click)=\"goBack()\">Back</button>\n    <button (click)=\"save()\">Save</button>\n    </div>\n  ",
            styleUrls: ['doc-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [doc_service_1.DocService, router_1.ActivatedRoute, common_1.Location, forms_1.FormBuilder])
    ], DocDetailComponent);
    return DocDetailComponent;
}());
exports.DocDetailComponent = DocDetailComponent;
//# sourceMappingURL=doc-detail.component.js.map