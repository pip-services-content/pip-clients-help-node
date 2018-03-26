let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { HelpTopicsMemoryPersistence } from 'pip-services-help-node';
import { HelpArticlesMemoryPersistence } from 'pip-services-help-node';
import { HelpController } from 'pip-services-help-node';
import { IHelpClientV1 } from '../../src/version1/IHelpClientV1';
import { HelpDirectClientV1 } from '../../src/version1/HelpDirectClientV1';
import { HelpClientFixtureV1 } from './HelpClientFixtureV1';

suite('HelpDirectClientV1', ()=> {
    let client: HelpDirectClientV1;
    let fixture: HelpClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistenceTopics = new HelpTopicsMemoryPersistence();
        let persistenceArticles = new HelpArticlesMemoryPersistence();
        let controller = new HelpController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-help', 'persistence-topics', 'memory', 'default', '1.0'), persistenceTopics,
            new Descriptor('pip-services-help', 'persistence-articles', 'memory', 'default', '1.0'), persistenceArticles,
            new Descriptor('pip-services-help', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new HelpDirectClientV1();
        client.setReferences(references);

        fixture = new HelpClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('Topics CRUD Operations', (done) => {
        fixture.testTopicsCrudOperations(done);
    });

    test('Articles CRUD Operations', (done) => {
        fixture.testArticlesCrudOperations(done);
    });
    
});
