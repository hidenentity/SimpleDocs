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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var doc_1 = require('./doc');
var DocService = (function () {
    function DocService(http) {
        this.http = http;
        this.docsUrl = 'http://localhost:8080/api/docs'; // URL to web api
        //  private docsUrl = 'api/docs';  // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DocService.prototype.getDocs = function () {
        return this.http.get(this.docsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DocService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DocService.prototype.getDoc = function (id) {
        var url = this.docsUrl + "/" + id;
        if (id == 0)
            return new Promise(function (resolve, reject) { resolve(new doc_1.Doc()); });
        else
            return this.http.get(url)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
    };
    DocService.prototype.update = function (doc) {
        var url = this.docsUrl + "/" + doc.id;
        return this.http
            .put(url, JSON.stringify(doc), { headers: this.headers })
            .toPromise()
            .then(function () { return doc; });
        //      .catch(this.handleError);
    };
    DocService.prototype.create = function (localdoc) {
        return this.http
            .post(this.docsUrl, JSON.stringify(localdoc, function (key, value) { if (key != 'id')
            return value;
        else
            return null; }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
        //    .catch(this.handleError);
    };
    DocService.prototype.delete = function (id) {
        var url = this.docsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    DocService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DocService);
    return DocService;
}());
exports.DocService = DocService;
//# sourceMappingURL=doc.service.js.map