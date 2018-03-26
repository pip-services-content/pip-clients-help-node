let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { MultiString } from 'pip-services-commons-node';

import { IHelpClientV1 } from '../../src/version1/IHelpClientV1';
import { HelpTopicV1 } from '../../src/version1/HelpTopicV1';
import { HelpArticleV1 } from '../../src/version1/HelpArticleV1';

let HELP_TOPIC1 = <HelpTopicV1>{
    id: '1',
    app: 'Test App 1',
    title: { en: 'Main topic' }
};
let HELP_TOPIC2 = <HelpTopicV1>{
    id: '2',
    parent_id: '1',
    app: 'Test App 1',
    title: { en: 'Subtopic 1' },
    popular: true
};

let HELP_ARTICLE1 = <HelpArticleV1>{
    id: '1',
    topic_id: '1',
    app: 'Test App 1',
    min_ver: 0,
    max_ver: 9999,
    status: 'new'
};
let HELP_ARTICLE2 = <HelpArticleV1>{
    id: '2',
    tags: ['TAG 1'],
    all_tags: ['tag1'],
    topic_id: '1',
    app: 'Test App 1',
    min_ver: 2,
    max_ver: 9999,
    status: 'new'
};

export class HelpClientFixtureV1 {
    private _client: IHelpClientV1;
    
    constructor(client: IHelpClientV1) {
        this._client = client;
    }
        
    public testTopicsCrudOperations(done) {
        let topic1, topic2: HelpTopicV1;

        async.series([
        // Create one topic
            (callback) => {
                this._client.createTopic(
                    null,
                    HELP_TOPIC1,
                    (err, topic) => {
                        assert.isNull(err);
                        
                        assert.isObject(topic);
                        assert.equal(topic.id, HELP_TOPIC1.id);
                        assert.equal(topic.app, HELP_TOPIC1.app);

                        topic1 = topic;

                        callback();
                    }
                );
            },
        // Create another topic
            (callback) => {
                this._client.createTopic(
                    null,
                    HELP_TOPIC2,
                    (err, topic) => {
                        assert.isNull(err);
                        
                        assert.isObject(topic);
                        assert.equal(topic.id, HELP_TOPIC2.id);
                        assert.equal(topic.app, HELP_TOPIC2.app);

                        topic2 = topic;

                        callback();
                    }
                );
            },
        // Get all topics
            (callback) => {
                this._client.getTopics(
                    null, null, null,
                    (err, page) => {
                        assert.isNull(err);
                        
                        assert.isObject(page);
                        assert.lengthOf(page.data, 2);

                        callback();
                    }
                );
            },
        // Update the topic
            (callback) => {
                topic1.app = 'New App 1';

                this._client.updateTopic(
                    null,
                    topic1,
                    (err, topic) => {
                        assert.isNull(err);
                        
                        assert.isObject(topic);
                        assert.equal(topic.app, 'New App 1');
                        assert.equal(topic.id, HELP_TOPIC1.id);

                        topic1 = topic;

                        callback();
                    }
                );
            },
        // Delete topic
            (callback) => {
                this._client.deleteTopicById(
                    null, topic1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete topic
            (callback) => {
                this._client.getTopicById(
                    null, topic1.id,
                    (err, topic) => {
                        assert.isNull(err);
                        
                        assert.isNull(topic || null);

                        callback();
                    }
                );
            }
        ], done);
    }

    public testArticlesCrudOperations(done) {
        let article1, article2: HelpArticleV1;

        async.series([
        // Create one article
            (callback) => {
                this._client.createArticle(
                    null,
                    HELP_ARTICLE1,
                    (err, article) => {
                        assert.isNull(err);
                        
                        assert.isObject(article);
                        assert.equal(article.id, HELP_ARTICLE1.id);
                        assert.equal(article.app, HELP_ARTICLE1.app);

                        article1 = article;

                        callback();
                    }
                );
            },
        // Create another article
            (callback) => {
                this._client.createArticle(
                    null,
                    HELP_ARTICLE2,
                    (err, article) => {
                        assert.isNull(err);
                        
                        assert.isObject(article);
                        assert.equal(article.id, HELP_ARTICLE2.id);
                        assert.equal(article.app, HELP_TOPIC2.app);

                        article2 = article;

                        callback();
                    }
                );
            },
        // Get all articles
            (callback) => {
                this._client.getArticles(
                    null, null, null,
                    (err, page) => {
                        assert.isNull(err);
                        
                        assert.isObject(page);
                        assert.lengthOf(page.data, 2);

                        callback();
                    }
                );
            },
        // Update the article
            (callback) => {
                article1.app = 'New App 1';

                this._client.updateArticle(
                    null,
                    article1,
                    (err, article) => {
                        assert.isNull(err);
                        
                        assert.isObject(article);
                        assert.equal(article.app, 'New App 1');
                        assert.equal(article.id, HELP_TOPIC1.id);

                        article1 = article;

                        callback();
                    }
                );
            },
        // Delete article
            (callback) => {
                this._client.deleteArticleById(
                    null, article1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get deleted article
            (callback) => {
                this._client.getArticleById(
                    null, article1.id,
                    (err, article) => {
                        assert.isNull(err);
                        
                        assert.isNull(article || null);

                        callback();
                    }
                );
            }
        ], done);
    }

}
