#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let fileName = require('yargs').argv['_']
let path = require('path')

async function rm(path) {
    // Use 'yield' in here
    // Your implementation here
    if (fileName[0] === undefined) {
    	process.stdout.write('incorrect path or file')
    }
    try {
      if (!(await fs.stat(path)).isDirectory() && !(await fs.stat(path)).isFile()) {
    	  process.stdout.write('error')
      }
      else {
      	if ((await fs.stat(path)).isFile()) {
      		 await fs.unlink(path)
      	}
      	else {
      		if ((await fs.stat(path)).isDirectory()) {
      		let fileNames = await fs.readdir(path)
      		  for(let file of fileNames){
      		    let nextPath = path+"/"+file
      		    	//path.join(path, file)
      		    await rm(nextPath)
      		  }
      		fs.rmdir(path)
      		}
      	}
      }
    }
    catch (err) {
    	
    }
    
}
rm(fileName[0])
module.exports = rm
