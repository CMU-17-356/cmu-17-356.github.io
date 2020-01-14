"use strict";
// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("./test-helper");
describe('HomePage', () => {
    let app;
    let client;
    before('setupApplication', async () => {
        ({ app, client } = await test_helper_1.setupApplication());
    });
    after(async () => {
        await app.stop();
    });
    it('exposes a default home page', async () => {
        await client
            .get('/')
            .expect(200)
            .expect('Content-Type', /text\/html/);
    });
    it('exposes self-hosted explorer', async () => {
        await client
            .get('/explorer/')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .expect(/<title>LoopBack API Explorer/);
    });
});
//# sourceMappingURL=home-page.acceptance.js.map