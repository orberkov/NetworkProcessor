let readlineSync = require('readline-sync');
const CommunicatingProtocol = require('./rules/communicatingProtocol')
const CommunicatingWith = require('./rules/communicatingWith')
const CommunicatingWithSubnet = require('./rules/communicatingWithSubnet')
const CommunicatingWithDomain = require('./rules/communicatingWithDomain')
const NetworkProcessor = require('./networkProcessor/networkProcessor')

let rules = [
	new CommunicatingProtocol('http', 'user endpoint'),
	new CommunicatingWith('10.1.1.1', 'ct'),
	new CommunicatingWithSubnet('10.1.1.0/24', 'ct'),
	new CommunicatingWithDomain('www.apple.com', 'iPhone'),
];

const processor = new NetworkProcessor();
processor.build(rules);

// TODO: should be kafka listener
while (true) {
	let command = readlineSync.prompt();
	if (command === 'exit') break;

	processor.process(command);

}
