const Rule = require('../domain/rule');
const {Netmask} = require('netmask');
module.exports = class CommunicatingWithSubnet extends Rule {
	constructor(argument, classification) {
		super('communicating_with_subnet', argument, classification);
		this.block = new Netmask(this.argument);
	}

	_check(comm) {
		return this.block.contains(comm.host)
	}
}
