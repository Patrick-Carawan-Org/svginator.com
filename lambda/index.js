const zlib = require('zlib');

exports.handler = async function (event, context) {
    // Get Base64Url string and convert to Base64
    let file = event.queryStringParameters.file
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    while (file.length % 4 > 0) {
        file += '=';
    }
    // Decode from Base64 into chars
    const decoded = atob(file);
    // Convert chars into char codes
    let charCodes = new Uint8Array(decoded.length);
    for (let i = 0; i < decoded.length; i++) {
        charCodes[i] = decoded.charCodeAt(i);
    }
    // Inflate
    const inflated = zlib.inflateRawSync(charCodes).toString();
    return {
        'statusCode': 200,
        'body': inflated,
        'headers': {
            'Content-Type': 'image/svg+xml'
	    }
    }
};


