#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let fileName = require('yargs').argv['_']

async function cat() {
    // Use 'yield' in here
    // Your implementation here
    //console.log(yield fs.readFile(__fileName, console.log))
	try {
    if (fileName[0] === undefined || !(await fs.stat(fileName[0])).isFile()) {
    	process.stdout.write('incorrect path or file')
    }
    else {
    	process.stdout.write(await fs.readFile(fileName[0], 'utf8'))
    }
	}
	catch(err) {
		console.log('Not a valid file')
	}
}

cat()