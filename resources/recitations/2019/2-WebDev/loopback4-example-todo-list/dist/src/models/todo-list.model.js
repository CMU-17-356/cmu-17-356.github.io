"use strict";
// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
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
const repository_1 = require("@loopback/repository");
const todo_model_1 = require("./todo.model");
const todo_list_image_model_1 = require("./todo-list-image.model");
let TodoList = class TodoList extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
    }),
    __metadata("design:type", Number)
], TodoList.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], TodoList.prototype, "title", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], TodoList.prototype, "color", void 0);
__decorate([
    repository_1.hasMany(() => todo_model_1.Todo),
    __metadata("design:type", Array)
], TodoList.prototype, "todos", void 0);
__decorate([
    repository_1.hasOne(() => todo_list_image_model_1.TodoListImage),
    __metadata("design:type", todo_list_image_model_1.TodoListImage)
], TodoList.prototype, "image", void 0);
TodoList = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], TodoList);
exports.TodoList = TodoList;
//# sourceMappingURL=todo-list.model.js.map