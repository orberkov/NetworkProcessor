module.exports = class Classification {
	constructor(device_id, classification, commId, ruleId) {
		this.device_id = device_id;
		this.classification = classification;
		this.commId = commId;
		this.ruleId = ruleId;
	}
}
