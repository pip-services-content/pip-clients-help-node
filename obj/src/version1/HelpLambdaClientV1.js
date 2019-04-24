"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class HelpLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('help');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getTopics(correlationId, filter, paging, callback) {
        this.callCommand('get_topics', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getTopicById(correlationId, topicId, callback) {
        this.callCommand('get_topic_by_id', correlationId, {
            topic_id: topicId
        }, callback);
    }
    createTopic(correlationId, topic, callback) {
        this.callCommand('create_topic', correlationId, {
            topic: topic,
        }, callback);
    }
    updateTopic(correlationId, topic, callback) {
        this.callCommand('update_topic', correlationId, {
            topic: topic,
        }, callback);
    }
    deleteTopicById(correlationId, topicId, callback) {
        this.callCommand('delete_topic_by_id', correlationId, {
            topic_id: topicId
        }, callback);
    }
    getArticles(correlationId, filter, paging, callback) {
        this.callCommand('get_articles', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getRandomArticle(correlationId, filter, callback) {
        this.callCommand('get_random_article', correlationId, {
            filter: filter
        }, callback);
    }
    getArticleById(correlationId, articleId, callback) {
        this.callCommand('get_article_by_id', correlationId, {
            article_id: articleId
        }, callback);
    }
    createArticle(correlationId, article, callback) {
        this.callCommand('create_article', correlationId, {
            article: article
        }, callback);
    }
    updateArticle(correlationId, article, callback) {
        this.callCommand('update_article', correlationId, {
            article: article
        }, callback);
    }
    deleteArticleById(correlationId, articleId, callback) {
        this.callCommand('delete_article_by_id', correlationId, {
            article_id: articleId
        }, callback);
    }
}
exports.HelpLambdaClientV1 = HelpLambdaClientV1;
//# sourceMappingURL=HelpLambdaClientV1.js.map