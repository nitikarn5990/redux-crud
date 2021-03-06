"use strict";
var start_1 = require("../../common/update/start");
var constants_1 = require("../../../constants");
var invariants_1 = require("../invariants");
var store_1 = require("../store");
var reducerName = constants_1.default.REDUCER_NAMES.UPDATE_START;
var invariantArgs = {
    reducerName: reducerName,
    canBeArray: false,
};
function start(config, current, record) {
    invariants_1.default(invariantArgs, config, current, record);
    // mark record as unsaved and busy
    var newRecord = start_1.prepareRecord(record);
    // replace record
    return store_1.default.merge(config, current, newRecord);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = start;
