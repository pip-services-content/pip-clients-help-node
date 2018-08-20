import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-components-node';
export declare class HelpClientFactory extends Factory {
    static Descriptor: Descriptor;
    static DirectClientV1Descriptor: Descriptor;
    static HttpClientV1Descriptor: Descriptor;
    static LambdaClientV1Descriptor: Descriptor;
    constructor();
}
