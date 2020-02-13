"use strict";
// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const controllers_1 = require("../../../src/controllers");
const repositories_1 = require("../../../src/repositories");
const helpers_1 = require("../../helpers");
describe('TodoController', () => {
    let todoListRepo;
    /*
    =============================================================================
    METHOD STUBS
    These handles give us a quick way to fake the response of our repository
    without needing to wrangle fake repository objects or manage real ones
    in our tests themselves.
    =============================================================================
     */
    let create;
    let count;
    let find;
    let updateAll;
    let findById;
    let updateById;
    let deleteById;
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
    let aTodoList;
    let aTodoListWithId;
    let aTodoListToPatchTo;
    let aChangedTodoList;
    let aListOfTodoLists;
    beforeEach(resetRepositories);
    describe('create()', () => {
        it('creates a TodoList', async () => {
            create.resolves(aTodoListWithId);
            testlab_1.expect(await controller.create(aTodoList)).to.eql(aTodoListWithId);
            testlab_1.sinon.assert.calledWith(create, aTodoList);
        });
    });
    describe('count()', () => {
        it('returns the number of existing todoLists', async () => {
            count.resolves(aListOfTodoLists.length);
            testlab_1.expect(await controller.count()).to.eql(aListOfTodoLists.length);
            testlab_1.sinon.assert.called(count);
        });
    });
    describe('find()', () => {
        it('returns multiple todos if they exist', async () => {
            find.resolves(aListOfTodoLists);
            testlab_1.expect(await controller.find()).to.eql(aListOfTodoLists);
            testlab_1.sinon.assert.called(find);
        });
        it('returns empty list if no todos exist', async () => {
            const expected = [];
            find.resolves(expected);
            testlab_1.expect(await controller.find()).to.eql(expected);
            testlab_1.sinon.assert.called(find);
        });
    });
    describe('updateAll()', () => {
        it('returns a number of todos updated', async () => {
            updateAll.resolves([aChangedTodoList].length);
            const where = { title: aTodoListWithId.title };
            testlab_1.expect(await controller.updateAll(aTodoListToPatchTo, where)).to.eql(1);
            testlab_1.sinon.assert.calledWith(updateAll, aTodoListToPatchTo, where);
        });
    });
    describe('findById()', () => {
        it('returns a todo if it exists', async () => {
            findById.resolves(aTodoListWithId);
            testlab_1.expect(await controller.findById(aTodoListWithId.id)).to.eql(aTodoListWithId);
            testlab_1.sinon.assert.calledWith(findById, aTodoListWithId.id);
        });
    });
    describe('updateById', () => {
        it('successfully updates existing items', async () => {
            updateById.resolves();
            await controller.updateById(aTodoListWithId.id, aTodoListToPatchTo);
            testlab_1.sinon.assert.calledWith(updateById, aTodoListWithId.id, aTodoListToPatchTo);
        });
    });
    describe('deleteById', () => {
        it('successfully deletes existing items', async () => {
            deleteById.resolves();
            await controller.deleteById(aTodoListWithId.id);
            testlab_1.sinon.assert.calledWith(deleteById, aTodoListWithId.id);
        });
    });
    function resetRepositories() {
        todoListRepo = testlab_1.createStubInstance(repositories_1.TodoListRepository);
        aTodoList = helpers_1.givenTodoList();
        aTodoListWithId = helpers_1.givenTodoList({
            id: 1,
        });
        aListOfTodoLists = [
            aTodoListWithId,
            helpers_1.givenTodoList({
                id: 2,
                title: 'a lot of todos',
            }),
        ];
        aTodoListToPatchTo = helpers_1.givenTodoList({
            title: 'changed list of todos',
        });
        aChangedTodoList = helpers_1.givenTodoList({
            id: aTodoListWithId.id,
            title: aTodoListToPatchTo.title,
        });
        // Setup CRUD fakes
        ({
            create,
            count,
            find,
            updateAll,
            findById,
            updateById,
            deleteById,
        } = todoListRepo.stubs);
        controller = new controllers_1.TodoListController(todoListRepo);
    }
});
//# sourceMappingURL=todo-list.controller.unit.js.map