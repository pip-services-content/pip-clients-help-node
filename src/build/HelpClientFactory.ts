import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-commons-node';

import { HelpDirectClientV1 } from '../version1/HelpDirectClientV1';
import { HelpHttpClientV1 } from '../version1/HelpHttpClientV1';
import { HelpLambdaClientV1 } from '../version1/HelpLambdaClientV1';

export class HelpClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-help', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-help', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-help', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-help', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(HelpClientFactory.DirectClientV1Descriptor, HelpDirectClientV1);
		this.registerAsType(HelpClientFactory.HttpClientV1Descriptor, HelpHttpClientV1);
		this.registerAsType(HelpClientFactory.LambdaClientV1Descriptor, HelpLambdaClientV1);
	}
	
}
