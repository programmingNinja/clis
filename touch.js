#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let fileName = require('yargs').argv['_']

async function touch() {
    // Use 'yield' in here
    // Your implementation here
//    console.log(yield fs.readFile(__filename, console.log))
	if (fileName[0] === undefined || !(await fs.stat(fileName[0])).isFile()) {
    	process.stdout.write('incorrect path or file')
    }
	else {
    try {
        await fs.utimes(fileName[0], new Date(),new Date())
      } catch(err) {
        await fs.writeFile(fileName[0], '')
      }
	}

}
touch()
