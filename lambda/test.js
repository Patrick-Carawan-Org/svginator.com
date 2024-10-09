const { handler } = require('./index.js');

const b64Encoded = `PHN2ZyB2aWV3Qm94PScwIDAgMTA1IDkzJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J002NiwwaDM5djkzek0zOCwwaC0zOHY5M3pNNTIsMzVsMjUsNThoLTE2bC04LTE4aC0xOHonIGZpbGw9JyNFRDFDMjQnPjwvc3ZnPgo=`;

const retVal = handler({
	queryStringParameters: {
		file: b64Encoded 
	}
})

console.log(retVal)
