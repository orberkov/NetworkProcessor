const assert = require('assert');
const NetworkProcessor = require('../networkProcessor/networkProcessor');
const CommunicatingProtocol = require('../rules/communicatingProtocol');

describe('Basic Rules', function () {
	describe('CommunicatingProtocol', function () {
		it('should detect CommunicatingProtocol', function () {
			const processor = new NetworkProcessor();
			processor.build([new CommunicatingProtocol('http', 'user endpoint')]);
			const input = "1,1578455846,aaaa,http,10.0.0.1";

			processor.process(input);

			let classification = processor.getClassification('aaaa');
			assert.equal(classification.device_id, 'aaaa');
			assert.equal(classification.classification, 'user endpoint');
		});

		/// TODO: more basic tests here
	});


	describe('Override by message attributes', function () {
		it('should override higher commId', function () {

		});

		it('should NOT override lower commId', function () {

		});


		it('should override lower commId but earlier is unknown', function () {

		});

		it('should override by commId and not ruleId', function () {

		});

		it('should override by commId and ruleId', function () {

		});

		it('should override if earlier is unknown', function () {

		});
		/// more basic tests here
	});


	describe('multitask', function () {
		it('should avoid collision between same device_id', function () {

		});

	});
});
