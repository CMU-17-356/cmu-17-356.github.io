"use strict";
// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const application_1 = require("../../src/application");
const repositories_1 = require("../../src/repositories/");
const helpers_1 = require("../helpers");
describe('TodoListApplication', () => {
    let app;
    let client;
    let todoListImageRepo;
    let todoListRepo;
    let persistedTodoList;
    before(givenRunningApplicationWithCustomConfiguration);
    after(() => app.stop());
    before(givenTodoListImageRepository);
    before(givenTodoListRepository);
    before(() => {
        client = testlab_1.createRestAppClient(app);
    });
    beforeEach(async () => {
        await todoListImageRepo.deleteAll();
        await todoListRepo.deleteAll();
    });
    beforeEach(async () => {
        persistedTodoList = await givenTodoListInstance();
    });
    it('creates image for a todoList', async () => {
        const todoListImage = helpers_1.givenTodoListImage();
        delete todoListImage.todoListId;
        const response = await client
            .post(`/todo-lists/${persistedTodoList.id}/image`)
            .send(todoListImage)
            .expect(200);
        const expected = Object.assign({}, todoListImage, { todoListId: persistedTodoList.id });
        testlab_1.expect(response.body).to.containEql(expected);
        const created = await todoListImageRepo.findById(response.body.id);
        testlab_1.expect(testlab_1.toJSON(created)).to.deepEqual(Object.assign({ id: response.body.id }, expected));
    });
    it('finds images for a todoList', async () => {
        const todoListImage = await givenTodoListImageInstanceOfTodoList(persistedTodoList.id, {
            value: 'A picture of a green checkmark',
        });
        const response = await client
            .get(`/todo-lists/${persistedTodoList.id}/image`)
            .send()
            .expect(200);
        testlab_1.expect(response.body).to.containDeep(todoListImage);
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
    async function givenTodoListImageRepository() {
        todoListImageRepo = await app.getRepository(repositories_1.TodoListImageRepository);
    }
    async function givenTodoListRepository() {
        todoListRepo = await app.getRepository(repositories_1.TodoListRepository);
    }
    async function givenTodoListImageInstanceOfTodoList(id, todoListImage) {
        const data = helpers_1.givenTodoListImage(todoListImage);
        delete data.todoListId;
        return await todoListRepo.image(id).create(data);
    }
    async function givenTodoListInstance(todoList) {
        return await todoListRepo.create(helpers_1.givenTodoList(todoList));
    }
});
//# sourceMappingURL=todo-list-image.acceptance.js.map