const Rule = require('../domain/rule');
module.exports = class CommunicatingProtocol extends Rule {

	constructor(argument, classification) {
		super('communicating_protocol', argument, classification);
	}

	_check(comm) {
		return comm.protocol_name === this.argument;
	}
}
