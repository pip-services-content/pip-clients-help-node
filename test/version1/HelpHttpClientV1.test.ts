let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { HelpTopicsMemoryPersistence } from 'pip-services-help-node';
import { HelpArticlesMemoryPersistence } from 'pip-services-help-node';
import { HelpController } from 'pip-services-help-node';
import { HelpHttpServiceV1 } from 'pip-services-help-node';
import { IHelpClientV1 } from '../../src/version1/IHelpClientV1';
import { HelpHttpClientV1 } from '../../src/version1/HelpHttpClientV1';
import { HelpClientFixtureV1 } from './HelpClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('HelpHttpClientV1', ()=> {
    let service: HelpHttpServiceV1;
    let client: HelpHttpClientV1;
    let fixture: HelpClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistenceTopics = new HelpTopicsMemoryPersistence();
        let persistenceArticles = new HelpArticlesMemoryPersistence();
        let controller = new HelpController();

        service = new HelpHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-help', 'persistence-topics', 'memory', 'default', '1.0'), persistenceTopics,
            new Descriptor('pip-services-help', 'persistence-articles', 'memory', 'default', '1.0'), persistenceArticles,
            new Descriptor('pip-services-help', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-help', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new HelpHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new HelpClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('Topics CRUD Operations', (done) => {
        fixture.testTopicsCrudOperations(done);
    });

    test('Articles CRUD Operations', (done) => {
        fixture.testArticlesCrudOperations(done);
    });
    
});
