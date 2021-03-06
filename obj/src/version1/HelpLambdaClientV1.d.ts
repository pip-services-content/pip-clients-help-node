import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { HelpTopicV1 } from './HelpTopicV1';
import { HelpArticleV1 } from './HelpArticleV1';
import { IHelpClientV1 } from './IHelpClientV1';
export declare class HelpLambdaClientV1 extends CommandableLambdaClient implements IHelpClientV1 {
    constructor(config?: any);
    getTopics(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<HelpTopicV1>) => void): void;
    getTopicById(correlationId: string, topicId: string, callback: (err: any, topic: HelpTopicV1) => void): void;
    createTopic(correlationId: string, topic: HelpTopicV1, callback: (err: any, topic: HelpTopicV1) => void): void;
    updateTopic(correlationId: string, topic: HelpTopicV1, callback: (err: any, topic: HelpTopicV1) => void): void;
    deleteTopicById(correlationId: string, topicId: string, callback: (err: any, topic: HelpTopicV1) => void): void;
    getArticles(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<HelpArticleV1>) => void): void;
    getRandomArticle(correlationId: string, filter: FilterParams, callback: (err: any, article: HelpArticleV1) => void): void;
    getArticleById(correlationId: string, articleId: string, callback: (err: any, article: HelpArticleV1) => void): void;
    createArticle(correlationId: string, article: HelpArticleV1, callback: (err: any, article: HelpArticleV1) => void): void;
    updateArticle(correlationId: string, article: HelpArticleV1, callback: (err: any, article: HelpArticleV1) => void): void;
    deleteArticleById(correlationId: string, articleId: string, callback: (err: any, article: HelpArticleV1) => void): void;
}
