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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
let TodoListImageController = class TodoListImageController {
    constructor(todoListRepo) {
        this.todoListRepo = todoListRepo;
    }
    async create(id, image) {
        return await this.todoListRepo.image(id).create(image);
    }
    async find(id) {
        return await this.todoListRepo.image(id).get();
    }
};
__decorate([
    rest_1.post('/todo-lists/{id}/image', {
        responses: {
            '200': {
                description: 'create todoListImage model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.TodoListImage } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.TodoListImage]),
    __metadata("design:returntype", Promise)
], TodoListImageController.prototype, "create", null);
__decorate([
    rest_1.get('/todo-lists/{id}/image', {
        responses: {
            '200': {
                description: 'The image belonging to the TodoList',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.TodoListImage } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoListImageController.prototype, "find", null);
TodoListImageController = __decorate([
    __param(0, repository_1.repository(repositories_1.TodoListRepository)),
    __metadata("design:paramtypes", [repositories_1.TodoListRepository])
], TodoListImageController);
exports.TodoListImageController = TodoListImageController;
//# sourceMappingURL=todo-list-image.controller.js.map