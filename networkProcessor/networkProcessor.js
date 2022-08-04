const Classification = require('../domain/classification');
const Communication = require('../domain/communication');

// TODO: external key-value DB
const classDb = {};

module.exports = class NetworkProcessor {

	// TODO: inject redisLock for testing purposes
	constructor(redisLock) {
		this.redisLock = redisLock;
	}

	getClassification(deviceId) {
		return classDb[deviceId];
	}

	build(rules) {
		// TODO: build dynamically from files!!
		this.rules = rules;
		this.rules.sort((a,b) => a.id < b.id ? 1 : -1 );
	}

	process(input) {
		let split = input.split(',');
		let comm = new Communication(split[0], Number(split[1]), split[2], split[3], split[4]);

		let classification;
		for (const rule of this.rules) {
			classification = rule.process(comm);
			if (classification) {
				break;
			}
		}

		if (!classification) {
			classification = new Classification(comm.device_id, 'unknown', undefined, undefined)
		}

		// TODO: enter critical section per device_id (redis lock)
		// use this.redisLock (dependency injection)

		let currentClassification = classDb[classification.device_id];

		if (!!currentClassification && currentClassification.classification !== 'unknown') {
			let replace = false;
			if (!!classification && classification.classification !== 'unknown') {
				if (classification.commId === currentClassification.commId) {
					if (classification.ruleId > currentClassification.ruleId) {
						replace = true;
					}
				}
				else if (classification.commId > currentClassification.commId) {
					replace = true;
				}

				if (replace) classDb[classification.device_id] = classification;
			}
		}
		else {
			classDb[classification.device_id] = classification;
		}

		console.log(classDb)

	}
}
