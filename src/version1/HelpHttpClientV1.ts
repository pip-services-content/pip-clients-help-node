import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableHttpClient } from 'pip-services-rpc-node';

import { HelpTopicV1 } from './HelpTopicV1';
import { HelpArticleV1 } from './HelpArticleV1';
import { IHelpClientV1 } from './IHelpClientV1';

export class HelpHttpClientV1 extends CommandableHttpClient implements IHelpClientV1 {

    constructor(config?: any) {
        super('v1/help');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public getTopics(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<HelpTopicV1>) => void): void {
        this.callCommand(
            'get_topics',
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getTopicById(correlationId: string, topicId: string,
        callback: (err: any, topic: HelpTopicV1) => void): void {
        this.callCommand(
            'get_topic_by_id',
            correlationId,
            {
                topic_id: topicId
            }, 
            callback
        );
    }

    public createTopic(correlationId: string, topic: HelpTopicV1,
        callback: (err: any, topic: HelpTopicV1) => void): void {
        this.callCommand(
            'create_topic',
            correlationId,
            {
                topic: topic,
            }, 
            callback
        );
    }

    public updateTopic(correlationId: string, topic: HelpTopicV1,
        callback: (err: any, topic: HelpTopicV1) => void): void {
        this.callCommand(
            'update_topic',
            correlationId,
            {
                topic: topic,
            }, 
            callback
        );
    }

    public deleteTopicById(correlationId: string, topicId: string,
        callback: (err: any, topic: HelpTopicV1) => void): void {
        this.callCommand(
            'delete_topic_by_id',
            correlationId,
            {
                topic_id: topicId
            }, 
            callback
        );
    }

    public getArticles(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<HelpArticleV1>) => void): void {
        this.callCommand(
            'get_articles',
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getRandomArticle(correlationId: string, filter: FilterParams,
        callback: (err: any, article: HelpArticleV1) => void): void {
        this.callCommand(
            'get_random_article',
            correlationId,
            {
                filter: filter
            }, 
            callback
        );
    }

    public getArticleById(correlationId: string, articleId: string,
        callback: (err: any, article: HelpArticleV1) => void): void {
        this.callCommand(
            'get_article_by_id',
            correlationId,
            {
                article_id: articleId
            }, 
            callback
        );
    }

    public createArticle(correlationId: string, article: HelpArticleV1,
        callback: (err: any, article: HelpArticleV1) => void): void {
        this.callCommand(
            'create_article',
            correlationId,
            {
                article: article
            }, 
            callback
        );
    }

    public updateArticle(correlationId: string, article: HelpArticleV1,
        callback: (err: any, article: HelpArticleV1) => void): void {
        this.callCommand(
            'update_article',
            correlationId,
            {
                article: article
            }, 
            callback
        );
    }

    public deleteArticleById(correlationId: string, articleId: string,
        callback: (err: any, article: HelpArticleV1) => void): void {
        this.callCommand(
            'delete_article_by_id',
            correlationId,
            {
                article_id: articleId
            }, 
            callback
        );
    }

}
