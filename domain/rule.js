const Classification = require('./classification')

let ruleId = 1;
module.exports = class Rule {
	constructor(type, argument, classification) {
		this.id = ruleId++;
		this.type = type;
		this.argument = argument;
		this.classification = classification;
	}

	process(comm) {
		try {
			if (this._check(comm)) {
				return new Classification(comm.device_id, this.classification, comm.id, this.id);
			}
		}
		catch(e) {
			// TODO: if exception is thrown, reschedule the message for a later time
		}
	}

	_check(comm) {
		throw 'not implemented';
	}
}
