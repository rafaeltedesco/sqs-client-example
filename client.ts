import { SQSClient } from '@aws-sdk/client-sqs';

const client = new SQSClient({
	region: 'us-east-1',
	credentials: {
		accessKeyId: '',
		secretAccessKey: ''
	}
})

export default client;