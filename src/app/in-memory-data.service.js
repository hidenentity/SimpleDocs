"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var docs = [
            { id: 11, date: '2016-12-12', number: '0001', description: 'opa' },
            { id: 12, date: '2016-12-12', number: '0002', description: 'opa' }
        ];
        return { docs: docs };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map