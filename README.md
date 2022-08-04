Network Processor
=================
npm --version
> 6.14.16

node version 14.19
> nvm use v14.19

To start the processor:
> npm i
> node run.js

The processor will output the known classifications for a well structured input.

For example:
> 1,1578455846,aaaa,http,10.0.0.1

Output:
```javascript
{
	aaaa: Classification {
		device_id: 'aaaa',
                classification: 'user endpoint',
                commId: '1',
                ruleId: 1
	}
}
```

Usage
----
The processor can be configured with different processing rules
```javascript
let rules = [
	new CommunicatingProtocol('http', 'user endpoint'),
	new CommunicatingWith('10.1.1.1', 'ct'),
	new CommunicatingWithSubnet('10.1.1.0/24', 'ct'),
	new CommunicatingWithDomain('www.apple.com', 'iPhone'),
];

const processor = new NetworkProcessor();
processor.build(rules);
```

See `run.js` for implenentation details

