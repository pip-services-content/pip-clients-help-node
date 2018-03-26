"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const HelpDirectClientV1_1 = require("../version1/HelpDirectClientV1");
const HelpHttpClientV1_1 = require("../version1/HelpHttpClientV1");
const HelpLambdaClientV1_1 = require("../version1/HelpLambdaClientV1");
class HelpClientFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(HelpClientFactory.DirectClientV1Descriptor, HelpDirectClientV1_1.HelpDirectClientV1);
        this.registerAsType(HelpClientFactory.HttpClientV1Descriptor, HelpHttpClientV1_1.HelpHttpClientV1);
        this.registerAsType(HelpClientFactory.LambdaClientV1Descriptor, HelpLambdaClientV1_1.HelpLambdaClientV1);
    }
}
HelpClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-help', 'factory', 'default', 'default', '1.0');
HelpClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-help', 'client', 'direct', 'default', '1.0');
HelpClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-help', 'client', 'http', 'default', '1.0');
HelpClientFactory.LambdaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-help', 'client', 'lambda', 'default', '1.0');
exports.HelpClientFactory = HelpClientFactory;
//# sourceMappingURL=HelpClientFactory.js.map