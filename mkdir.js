#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let fileName = require('yargs').argv['_']

async function mkdir() {
    // Use 'yield' in here
    // Your implementation here
	try {
	  if (fileName[0] === undefined || (await fs.stat(fileName[0])).isDirectory()) {
    	  process.stdout.write('incorrect path or directory exists')
      }
	}
	catch(err) {
		await fs.mkdir(fileName[0])
	}
}

mkdir()
