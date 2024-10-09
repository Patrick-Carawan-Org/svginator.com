const base64url = require('base64url');
const zlib = require('zlib');

exports.handler = async function (event, context) {
  
// 	console.log("HELLO event query params", event.queryParameters);
    console.log("HEEYYYY event", {event})
	const decoded = base64url.decode(event.queryStringParameters.file)
// 	console.log(decoded)
    const buffer = new Buffer(decoded);
    const output = zlib.inflate(buffer);
    console.log("OUTPUT", output)
    return {
        'statusCode': 200,
		'body': `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="350"><path id="lineAC" d="M 30 180 q 150 -250 300 0" stroke="blue" stroke-width="2" fill="none"></path><text style="fill:red;font-size:25px;"><textPath href="#lineAC">I love SVG! I love SVG!</textPath></text>
  Sorry, your browser does not support inline SVG.
</svg>`,
        'headers': {
            'Content-Type': 'image/svg+xml'
	    }
    }
};

