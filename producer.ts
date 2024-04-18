import { SendMessageCommand, SendMessageCommandInput } from '@aws-sdk/client-sqs';
import client from './client';

(async () => {
	for (let i = 0; i < 10; i++) {
		const inputParams: SendMessageCommandInput = {
			QueueUrl: '',
			MessageBody: JSON.stringify({
				id: `Hello ${i}`,
			})
		}

		const command = new SendMessageCommand(inputParams);

		const response = await client.send(command);
		console.log(response);
	}


})()
