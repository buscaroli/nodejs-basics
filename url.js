// LEARNNING NODEJS WITH 'AUTOMATING WITH NODEJS'
// Using 'url'.
// Taking a URL from the CLI and extracting the various parts.
// Also saving them into an object.
//
// Matteo
const url = require('url');

const args = process.argv.slice(2);
const [urlEntered] = args;

if (urlEntered === undefined){
    console.error('Please enter an address');
    process.exit(0);
}

// requesting different parts of the url
const{
    protocol, slashes, host, query, href
} = url.parse(urlEntered); 

console.log(`Protocol: ${protocol}`);
console.log(`Using slashes (bool): ${slashes}`);
console.log(`Host: ${host}`);
console.log(`Query: ${query}`);
console.log(`Href: ${href}`);

// Creating an object containing the host and query

const hostAndQuery = {
    host,
    query,
};

hostAndQuery.host = host;
hostAndQuery.query = query;

console.log(`You searched ${hostAndQuery.host} for ${hostAndQuery.query}`);