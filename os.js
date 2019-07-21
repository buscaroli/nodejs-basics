// LEARNING NODE.JS WITH 'AUTOMATING WITH NODE.JS'
// GETTING INFO ABOUT THE SYSTEM
//
// Note how amazing is destructuring and more specifically
// Multiple Destructuring!!
//
// Matteo
//
// requires 'opn'
const os = require('os');

const homeDir = os.homedir();
console.log(`Yout home directory is ${homeDir}`);

const osPlatform = os.platform();
console.log(`Your OS is ${osPlatform}`);

const cpuCores = os.cpus();
const coreCount = cpuCores.length;
const cpuModel = cpuCores[0].model;
console.log(`You have a ${coreCount} core CPU: ${cpuModel}`);

// ALTERNATIVE USING DESTRUCTURING AND DOING SOME OTHER STUFF

/* const { platform } = require('os');
console.log(`Your platform is ${platform()}`);

const { homedir } = require('os');
console.log(`Your home directory is ${homedir()}`);

const { cpus } = require ('os');
console.log(`Yoour CPU has ${cpus().length} cores and is a ${cpus()[0].model}`);
*/

// ALTERNATIVE USING MULTIPLE DESTRUCTURING

const { platform, homedir, cpus} = require ('os');
process.stdout.write(`Your platform is ${platform}\nYour home directry is ${homedir}\n`);
process.stdout.write(`You have ${cpus().length} cpus of type ${cpus()[0].model}\n`);

// let's start a Web Browser, but before doing that let's make sure we select the
// most appropriate one depending on the OS!

const opn = require ('opn');

const args = process.argv.slice(2); // holds the address to open on the browser passed via CLI
const [url] = args;

if (url == undefined) {
    console.error('Please try again by entering an URL');
    process.exit(0);
}

// let's save the command to start the web browser in different systems
// Note atm I only have access to win10, can't test with other OSs
// and WSL1 seems to misbehave: platform recognised as linux but 
// opn tries to launch lynx through Windows ignoring WSL1


console.log('Starting the Web Browser...');


if (platform() === 'win32') {
    opn(`'${url}'`, {app:'firefox'});
} else if (platform() === 'linux')
{
    opn(`'${url}'`, {app:'lynx'});
} else {
    opn(`'${url}'`, {app:'safari'});;
}


