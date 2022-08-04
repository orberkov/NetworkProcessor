module.exports = class Communication {
	constructor(id, timestamp, device_id, protocol_name, host) {
		this.id = id;
		this.timestamp = timestamp;
		this.device_id = device_id;
		this.protocol_name = protocol_name;
		this.host = host;
	}
}
