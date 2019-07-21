// LEARNING NODEJS WITH 'AUTOMATING WITH NODE.JS'
// USING QUERYSTRING.STRINGIFY
// Converting a data structure into a query string useful for
// interacting with an API (in this case for 'jira') so it is 
// converted to the format 'key=value&key=value&key=value'.
// The opposite is also true: you can take a query string and
// create an object using 'querystring.parse'.
//
// Matteo

const querystring = require('querystring');

const apiHost = 'https://jira.my-company.com/rest/api/latest/search?jql=';

const jqlParams = {
    assignee: 'john.smith',
    startAt: 2,
    maxResults: 2
};

const apiUrl = `${apiHost}${querystring.stringify(jqlParams)}`;

console.log(`My JQL api call is: ${apiUrl}`);``

// Creating an object and printing its properties
// Using a +5 to 'skip'  the '?jql=' part of the url
const parsedUrl = querystring.parse(apiUrl.substring(apiUrl.indexOf('?') + 5));

console.log('Printing the properties of the Object:');

console.log(`Name: ${parsedUrl.assignee}\nStarting at: ${parsedUrl.startAt}\nMax: ${parsedUrl.maxResults}\n`);