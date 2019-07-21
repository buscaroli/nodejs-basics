// LEARNING THE BASICS OF NODEJS WITH 'AUTOMATING WITH NODEJS'
//
// Matteo

// Removing the first 2 elements of the array which are
// nodejs itself and the file name
const trueArgs = process.argv.slice(2);

const [namesArray] = trueArgs;

console.log(`This process is pid ${process.pid}`);

// Playing with different functions of 'process'
if (namesArray === undefined){
    console.log ('Error: please call the script with one argument');
} else {
    process.stdout.write(`Hi ${namesArray},\nthis is where the script begins.\n`);
    process.stdout.write(`The current directory is ${process.cwd()}\n`);

    process.stdout.write('Please write something for me: [End with CTRL+D]\n');
    process.stdin.setEncoding('utf8');

    process.stdin.on('readable', () => {
        let chunk;
        // Use a loop to make sure we read all available data.
        while ((chunk = process.stdin.read()) !== null) {
            process.stdout.write(`output: ${chunk}\n`);
        }
    });
}

process.stdin.on('end', () => {
    process.stdout.write('\nProcess Terminated with CTRL+D.\n');

    process.on('exit', (code) => {
        console.log (`Process ended with code ${code}`);
    });
    
    console.log(`This script has run for ${process.uptime()} seconds.`);    
    
});




