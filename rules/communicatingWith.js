const Rule = require('../domain/rule');
module.exports = class CommunicatingWith extends Rule {
	constructor(argument, classification) {
		super('communicating_with', argument, classification);
	}

	_check(comm) {
		return comm.host === this.argument;
	}
}
