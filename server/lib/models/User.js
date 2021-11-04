"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
});
exports.default = (0, mongoose_1.model)("User", userSchema);
