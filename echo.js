#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let args = require('yargs').argv['_']

async function echo() {
	if (args[0]) {
      process.stdout.write(args[0])
	}
}

echo()
