import { HelpClientFixtureV1 } from './HelpClientFixtureV1';
import { HelpLambdaClientV1 } from '../../src/version1/HelpLambdaClientV1';
import { ConfigParams } from 'pip-services-commons-node';

suite('HelpLambdaClient', ()=> {
    let lambdaArn = process.env['AWS_LAMBDA_ARN'];
    let awsAccessId = process.env['AWS_ACCESS_ID'];
    let awsAccessKey = process.env['AWS_ACCESS_KEY'];
    if (lambdaArn == null || awsAccessId == null)
        return;

    let client: HelpLambdaClientV1;
    let fixture: HelpClientFixtureV1;

    setup((done) => {
        client = new HelpLambdaClientV1();
        client.configure(ConfigParams.fromTuples(
            'connection.arn', lambdaArn,
            'credential.access_id', awsAccessId,
            'credential.access_key', awsAccessKey
        ));

        fixture = new HelpClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Topics Crud Operations', (done) => {
        fixture.testTopicsCrudOperations(done);
    });

    test('Articles Crud Operations', (done) => {
        fixture.testArticlesCrudOperations(done);
    });
    
});