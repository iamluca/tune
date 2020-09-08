/**
 * Command: help
 * Description: The help command. Shows a full list of commands.
 * */
module.exports = {
	name: 'help',
	description: 'The help sends an embed with all of the necessary details and without any overloaded stuff which is not useful for the user.',
	// eslint-disable-next-line no-unused-vars
	execute(message, args, config) {

		message.delete().catch(e => {
			// TODO: How to handle this properly?
			// console.error(e)
			// message.channel.send('❌ Message to the owner of the server: **Please give the right permissions to me so I can delete this message.**')
		})

		message.author.send({
			embed: {
				color: 0xf1892d,
				title: message.client.user.username,
				fields: [
					{
						name: 'Commands',
						value: 'Click here to see all commands. *(coming soon)*',
					},
					{
						name: 'Invite',
						value: '[Click here](...) to add ***Tune*** to your server.',
					},
					{
						name: 'Donate',
						value: 'You can [donate on Patreon](....). Thank you very much for your help :)',
					},
					{
						name: 'Support',
						value: 'Join the [Discord Server](...) to get support if you\'re having problems with using the bot.',
					},
				],
			},
		})
	},
}