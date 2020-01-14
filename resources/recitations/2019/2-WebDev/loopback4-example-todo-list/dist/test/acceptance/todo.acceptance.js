"use strict";
// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const testlab_1 = require("@loopback/testlab");
const application_1 = require("../../src/application");
const repositories_1 = require("../../src/repositories/");
const helpers_1 = require("../helpers");
describe('TodoListApplication', () => {
    let app;
    let client;
    let todoRepo;
    let todoListRepo;
    before(givenRunningApplicationWithCustomConfiguration);
    after(() => app.stop());
    before(givenTodoRepositories);
    before(() => {
        client = testlab_1.createRestAppClient(app);
    });
    beforeEach(async () => {
        await todoRepo.deleteAll();
    });
    it('creates a todo', async function () {
        const todo = helpers_1.givenTodo();
        const response = await client
            .post('/todos')
            .send(todo)
            .expect(200);
        testlab_1.expect(response.body).to.containDeep(todo);
        const result = await todoRepo.findById(response.body.id);
        testlab_1.expect(result).to.containDeep(todo);
    });
    it('rejects requests to create a todo with no title', async () => {
        const todo = helpers_1.givenTodo();
        delete todo.title;
        await client
            .post('/todos')
            .send(todo)
            .expect(422);
    });
    context('when dealing with a single persisted todo', () => {
        let persistedTodo;
        beforeEach(async () => {
            persistedTodo = await givenTodoInstance();
        });
        it('gets a todo by ID', () => {
            return client
                .get(`/todos/${persistedTodo.id}`)
                .send()
                .expect(200, testlab_1.toJSON(persistedTodo));
        });
        it('returns 404 when getting a todo that does not exist', () => {
            return client.get('/todos/99999').expect(404);
        });
        it('replaces the todo by ID', async () => {
            const updatedTodo = helpers_1.givenTodo({
                title: 'DO SOMETHING AWESOME',
                desc: 'It has to be something ridiculous',
                isComplete: true,
            });
            await client
                .put(`/todos/${persistedTodo.id}`)
                .send(updatedTodo)
                .expect(204);
            const result = await todoRepo.findById(persistedTodo.id);
            testlab_1.expect(result).to.containEql(updatedTodo);
        });
        it('returns 404 when replacing a todo that does not exist', () => {
            return client
                .put('/todos/99999')
                .send(helpers_1.givenTodo())
                .expect(404);
        });
        it('updates the todo by ID ', async () => {
            const updatedTodo = helpers_1.givenTodo({
                title: 'DO SOMETHING AWESOME',
                isComplete: true,
            });
            await client
                .patch(`/todos/${persistedTodo.id}`)
                .send(updatedTodo)
                .expect(204);
            const result = await todoRepo.findById(persistedTodo.id);
            testlab_1.expect(result).to.containEql(updatedTodo);
        });
        it('returns 404 when updating a todo that does not exist', () => {
            return client
                .patch('/todos/99999')
                .send(helpers_1.givenTodo())
                .expect(404);
        });
        it('deletes the todo', async () => {
            await client
                .del(`/todos/${persistedTodo.id}`)
                .send()
                .expect(204);
            await testlab_1.expect(todoRepo.findById(persistedTodo.id)).to.be.rejectedWith(repository_1.EntityNotFoundError);
        });
        it('returns 404 when deleting a todo that does not exist', async () => {
            await client.del(`/todos/99999`).expect(404);
        });
        it('returns the owning todo-list', async () => {
            const list = await givenTodoListInstance();
            const todo = await givenTodoInstance({ todoListId: list.id });
            await client.get(`/todos/${todo.id}/todo-list`).expect(200, testlab_1.toJSON(list));
        });
    });
    it('queries todos with a filter', async () => {
        await givenTodoInstance({ title: 'wake up', isComplete: true });
        const todoInProgress = await givenTodoInstance({
            title: 'go to sleep',
            isComplete: false,
        });
        await client
            .get('/todos')
            .query({ filter: { where: { isComplete: false } } })
            .expect(200, [testlab_1.toJSON(todoInProgress)]);
    });
    /*
     ============================================================================
     TEST HELPERS
     These functions help simplify setup of your test fixtures so that your tests
     can:
     - operate on a "clean" environment each time (a fresh in-memory database)
     - avoid polluting the test with large quantities of setup logic to keep
     them clear and easy to read
     - keep them DRY (who wants to write the same stuff over and over?)
     ============================================================================
     */
    async function givenRunningApplicationWithCustomConfiguration() {
        app = new application_1.TodoListApplication({
            rest: testlab_1.givenHttpServerConfig(),
        });
        await app.boot();
        /**
         * Override default config for DataSource for testing so we don't write
         * test data to file when using the memory connector.
         */
        app.bind('datasources.config.db').to({
            name: 'db',
            connector: 'memory',
        });
        // Start Application
        await app.start();
    }
    async function givenTodoRepositories() {
        todoRepo = await app.getRepository(repositories_1.TodoRepository);
        todoListRepo = await app.getRepository(repositories_1.TodoListRepository);
    }
    async function givenTodoInstance(todo) {
        return await todoRepo.create(helpers_1.givenTodo(todo));
    }
    async function givenTodoListInstance(data) {
        return await todoListRepo.create(helpers_1.givenTodoList(data));
    }
});
//# sourceMappingURL=todo.acceptance.js.map