"use strict";
// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const testlab_1 = require("@loopback/testlab");
const controllers_1 = require("../../../src/controllers");
const repositories_1 = require("../../../src/repositories");
const helpers_1 = require("../../helpers");
describe('TodoController', () => {
    let todoListRepo;
    let constrainedTodoRepo;
    /*
    =============================================================================
    REPOSITORY FACTORY STUB
    This handle give us a quick way to fake the response of our repository
    without needing to wrangle fake repository objects or manage real ones
    in our tests themselves.
    =============================================================================
     */
    let todos;
    /*
    =============================================================================
    METHOD STUBS
    These handles give us a quick way to fake the response of our repository
    without needing to wrangle fake repository objects or manage real ones
    in our tests themselves.
    =============================================================================
     */
    let create;
    let find;
    let patch;
    let del;
    /*
    =============================================================================
    TEST VARIABLES
    Combining top-level objects with our resetRepositories method means we don't
    need to duplicate several variable assignments (and generation statements)
    in all of our test logic.
  
    NOTE: If you wanted to parallelize your test runs, you should avoid this
    pattern since each of these tests is sharing references.
    =============================================================================
    */
    let controller;
    let aTodoListWithId;
    let aTodo;
    let aTodoWithId;
    let aListOfTodos;
    let aTodoToPatchTo;
    let aChangedTodo;
    beforeEach(resetRepositories);
    describe('create()', () => {
        it('creates a todo on a todoList', async () => {
            create.resolves(aTodoWithId);
            testlab_1.expect(await controller.create(aTodoListWithId.id, aTodo)).to.eql(aTodoWithId);
            testlab_1.sinon.assert.calledWith(todos, aTodoListWithId.id);
            testlab_1.sinon.assert.calledWith(create, aTodo);
        });
    });
    describe('find()', () => {
        it('returns multiple todos if they exist', async () => {
            find.resolves(aListOfTodos);
            testlab_1.expect(await controller.find(aTodoListWithId.id)).to.eql(aListOfTodos);
            testlab_1.sinon.assert.calledWith(todos, aTodoListWithId.id);
            testlab_1.sinon.assert.called(find);
        });
        it('returns empty list if no todos exist', async () => {
            const expected = [];
            find.resolves(expected);
            testlab_1.expect(await controller.find(aTodoListWithId.id)).to.eql(expected);
            testlab_1.sinon.assert.calledWith(todos, aTodoListWithId.id);
            testlab_1.sinon.assert.called(find);
        });
    });
    describe('patch()', () => {
        it('returns a number of todos updated', async () => {
            patch.resolves([aChangedTodo].length);
            const where = { title: aTodoWithId.title };
            testlab_1.expect(await controller.patch(aTodoListWithId.id, aTodoToPatchTo, where)).to.eql(1);
            testlab_1.sinon.assert.calledWith(todos, aTodoListWithId.id);
            testlab_1.sinon.assert.calledWith(patch, aTodoToPatchTo, where);
        });
    });
    describe('deleteAll()', () => {
        it('successfully deletes existing items', async () => {
            del.resolves(aListOfTodos.length);
            testlab_1.expect(await controller.delete(aTodoListWithId.id)).to.eql(aListOfTodos.length);
            testlab_1.sinon.assert.calledWith(todos, aTodoListWithId.id);
            testlab_1.sinon.assert.called(del);
        });
    });
    function resetRepositories() {
        todoListRepo = testlab_1.createStubInstance(repositories_1.TodoListRepository);
        constrainedTodoRepo = testlab_1.createStubInstance(repository_1.DefaultHasManyRepository);
        aTodoListWithId = helpers_1.givenTodoList({
            id: 1,
        });
        aTodo = helpers_1.givenTodo();
        aTodoWithId = helpers_1.givenTodo({ id: 1 });
        aListOfTodos = [
            aTodoWithId,
            helpers_1.givenTodo({
                id: 2,
                title: 'do another thing',
            }),
        ];
        aTodoToPatchTo = helpers_1.givenTodo({
            title: 'revised thing to do',
        });
        aChangedTodo = helpers_1.givenTodo({
            id: aTodoWithId.id,
            title: aTodoToPatchTo.title,
        });
        todos = testlab_1.sinon
            .stub()
            .withArgs(aTodoListWithId.id)
            .returns(constrainedTodoRepo);
        // tslint:disable-next-line:no-any
        todoListRepo.todos = todos;
        // Setup CRUD fakes
        ({ create, find, patch, delete: del } = constrainedTodoRepo.stubs);
        controller = new controllers_1.TodoListTodoController(todoListRepo);
    }
});
//# sourceMappingURL=todo-list-todo.controller.unit.js.map