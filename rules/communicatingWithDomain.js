const Rule = require('../domain/rule');
const dns = require('dns');
module.exports = class CommunicatingWithDomain extends Rule {
	constructor(argument, classification) {
		super('communicating_with_domain', argument, classification);
		this.ready = true; // todo: false;

		// TODO: work with our own external hash
		dns.lookup(argument, (err, address, family) => {
			if(err) {
				console.log(err); return;
			} // reject(err);
			this.ready = true;
			this.ipToDomain[address]=argument;
		});

		// should be a cached (timeout based) hash - redis??
		this.ipToDomain = {
			'184.25.114.234': 'www.apple.com'
		};
	}

	_check(comm) {
		if (!this.ready) throw 'dns lookup not ready';
		return !!this.ipToDomain[comm.host];
	}

}
