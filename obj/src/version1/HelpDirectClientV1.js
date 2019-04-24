"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
//import { IHelpController } from 'pip-services-help-node';
class HelpDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_2.Descriptor("pip-services-help", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getTopics(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'help.get_topics');
        this._controller.getTopics(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getTopicById(correlationId, topicId, callback) {
        let timing = this.instrument(correlationId, 'help.get_topic_by_id');
        this._controller.getTopicById(correlationId, topicId, (err, topic) => {
            timing.endTiming();
            callback(err, topic);
        });
    }
    createTopic(correlationId, topic, callback) {
        let timing = this.instrument(correlationId, 'help.create_topic');
        this._controller.createTopic(correlationId, topic, (err, topic) => {
            timing.endTiming();
            callback(err, topic);
        });
    }
    updateTopic(correlationId, topic, callback) {
        let timing = this.instrument(correlationId, 'help.update_topic');
        this._controller.updateTopic(correlationId, topic, (err, topic) => {
            timing.endTiming();
            callback(err, topic);
        });
    }
    deleteTopicById(correlationId, topicId, callback) {
        let timing = this.instrument(correlationId, 'help.delete_topic_by_id');
        this._controller.deleteTopicById(correlationId, topicId, (err, topic) => {
            timing.endTiming();
            callback(err, topic);
        });
    }
    getArticles(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'help.get_articles');
        this._controller.getArticles(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getRandomArticle(correlationId, filter, callback) {
        let timing = this.instrument(correlationId, 'help.get_random_article');
        this._controller.getRandomArticle(correlationId, filter, (err, article) => {
            timing.endTiming();
            callback(err, article);
        });
    }
    getArticleById(correlationId, articleId, callback) {
        let timing = this.instrument(correlationId, 'help.get_article_by_id');
        this._controller.getArticleById(correlationId, articleId, (err, article) => {
            timing.endTiming();
            callback(err, article);
        });
    }
    createArticle(correlationId, article, callback) {
        let timing = this.instrument(correlationId, 'help.create_article');
        this._controller.createArticle(correlationId, article, (err, article) => {
            timing.endTiming();
            callback(err, article);
        });
    }
    updateArticle(correlationId, article, callback) {
        let timing = this.instrument(correlationId, 'help.update_article');
        this._controller.updateArticle(correlationId, article, (err, article) => {
            timing.endTiming();
            callback(err, article);
        });
    }
    deleteArticleById(correlationId, articleId, callback) {
        let timing = this.instrument(correlationId, 'help.delete_article_by_id');
        this._controller.deleteArticleById(correlationId, articleId, (err, article) => {
            timing.endTiming();
            callback(err, article);
        });
    }
}
exports.HelpDirectClientV1 = HelpDirectClientV1;
//# sourceMappingURL=HelpDirectClientV1.js.map