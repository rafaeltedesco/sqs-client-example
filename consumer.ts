import client from './client';
import { ReceiveMessageCommand, ReceiveMessageCommandInput, DeleteMessageCommand } from '@aws-sdk/client-sqs';


(async () => {
	const inputParams: ReceiveMessageCommandInput = {
		QueueUrl: '',
	}

	const command = new ReceiveMessageCommand(inputParams);
	while (true) {
		const response = await client.send(command);

		if (response) {
			const { Messages: messages } = response;
			if (messages && messages.length > 0) {
				for await (let message of messages) {
					console.log(message.Body);
					const deleteCommand = new DeleteMessageCommand({
						QueueUrl: '',
						ReceiptHandle: message.ReceiptHandle,
					})
					const response = await client.send(deleteCommand);
					console.log(response);

				}
			}
		}
	}
})()

