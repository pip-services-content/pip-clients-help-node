import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-rpc-node';

import { HelpTopicV1 } from './HelpTopicV1';
import { HelpArticleV1 } from './HelpArticleV1';
import { IHelpClientV1 } from './IHelpClientV1';
//import { IHelpController } from 'pip-services-help-node';

export class HelpDirectClientV1 extends DirectClient<any> implements IHelpClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-help", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getTopics(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<HelpTopicV1>) => void): void {
        let timing = this.instrument(correlationId, 'help.get_topics');
        this._controller.getTopics(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getTopicById(correlationId: string, topicId: string,
        callback: (err: any, topic: HelpTopicV1) => void): void {
        let timing = this.instrument(correlationId, 'help.get_topic_by_id');
        this._controller.getTopicById(correlationId, topicId, (err, topic) => {
            timing.endTiming();
            callback(err, topic);
        });
    }

    public createTopic(correlationId: string, topic: HelpTopicV1,
        callback: (err: any, topic: HelpTopicV1) => void): void {
        let timing = this.instrument(correlationId, 'help.create_topic');
        this._controller.createTopic(correlationId, topic, (err, topic) => {
            timing.endTiming();
            callback(err, topic);
        });
    }

    public updateTopic(correlationId: string, topic: HelpTopicV1,
        callback: (err: any, topic: HelpTopicV1) => void): void {
        let timing = this.instrument(correlationId, 'help.update_topic');
        this._controller.updateTopic(correlationId, topic, (err, topic) => {
            timing.endTiming();
            callback(err, topic);
        });
    }

    public deleteTopicById(correlationId: string, topicId: string,
        callback: (err: any, topic: HelpTopicV1) => void): void {
        let timing = this.instrument(correlationId, 'help.delete_topic_by_id');
        this._controller.deleteTopicById(correlationId, topicId, (err, topic) => {
            timing.endTiming();
            callback(err, topic);
        });
    }

    public getArticles(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<HelpArticleV1>) => void): void {
        let timing = this.instrument(correlationId, 'help.get_articles');
        this._controller.getArticles(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getRandomArticle(correlationId: string, filter: FilterParams,
        callback: (err: any, article: HelpArticleV1) => void): void {
        let timing = this.instrument(correlationId, 'help.get_random_article');
        this._controller.getRandomArticle(correlationId, filter, (err, article) => {
            timing.endTiming();
            callback(err, article);
        });
    }

    public getArticleById(correlationId: string, articleId: string,
        callback: (err: any, article: HelpArticleV1) => void): void {
        let timing = this.instrument(correlationId, 'help.get_article_by_id');
        this._controller.getArticleById(correlationId, articleId, (err, article) => {
            timing.endTiming();
            callback(err, article);
        });
    }

    public createArticle(correlationId: string, article: HelpArticleV1,
        callback: (err: any, article: HelpArticleV1) => void): void {
        let timing = this.instrument(correlationId, 'help.create_article');
        this._controller.createArticle(correlationId, article, (err, article) => {
            timing.endTiming();
            callback(err, article);
        });
    }

    public updateArticle(correlationId: string, article: HelpArticleV1,
        callback: (err: any, article: HelpArticleV1) => void): void {
        let timing = this.instrument(correlationId, 'help.update_article');
        this._controller.updateArticle(correlationId, article, (err, article) => {
            timing.endTiming();
            callback(err, article);
        });
    }

    public deleteArticleById(correlationId: string, articleId: string,
        callback: (err: any, article: HelpArticleV1) => void): void {
        let timing = this.instrument(correlationId, 'help.delete_article_by_id');
        this._controller.deleteArticleById(correlationId, articleId, (err, article) => {
            timing.endTiming();
            callback(err, article);
        });
    }
    
}