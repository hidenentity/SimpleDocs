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
var doc_service_1 = require('./doc.service');
var router_1 = require('@angular/router');
var DocsComponent = (function () {
    function DocsComponent(router, docService) {
        this.router = router;
        this.docService = docService;
    }
    ;
    DocsComponent.prototype.onSelect = function (doc) {
        this.selectedDoc = doc;
    };
    ;
    DocsComponent.prototype.getDocs = function () {
        var _this = this;
        this.docService.getDocs().then(function (docs) { return _this.docs = docs; });
    };
    ;
    DocsComponent.prototype.ngOnInit = function () {
        this.getDocs();
    };
    DocsComponent.prototype.gotoDetail = function (doc) {
        this.router.navigate(['/detail', doc.id]);
    };
    DocsComponent.prototype.add = function () {
        this.router.navigate(['/detail', 0]);
    };
    DocsComponent.prototype.delete = function (doc) {
        var _this = this;
        this.docService
            .delete(doc.id)
            .then(function () {
            _this.docs = _this.docs.filter(function (d) { return d !== doc; });
            if (_this.selectedDoc === doc) {
                _this.selectedDoc = null;
            }
        });
    };
    DocsComponent = __decorate([
        core_1.Component({
            selector: 'my-docs',
            moduleId: module.id,
            templateUrl: 'docs.component.html',
            styleUrls: ['docs.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, doc_service_1.DocService])
    ], DocsComponent);
    return DocsComponent;
}());
exports.DocsComponent = DocsComponent;
//# sourceMappingURL=docs.component.js.map