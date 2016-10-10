#!/usr/bin/env babel-node

require('./helper')
let path = require('path')
let fs = require('fs').promise
let fileName = require('yargs').argv['_']
let recursive = require('yargs').argv['R']

async function ls(rootPath) {
  try {
    if (rootPath) {
      if (!(await fs.stat(rootPath)).isDirectory() && !(await fs.stat(rootPath)).isFile()) {
        process.stdout.write('error')
      } else {
        let dirName = path.normalize(rootPath)
        let fileNames = await fs.readdir(rootPath)
        for (let value of fileNames) {
          let filePath = path.join(dirName, value)
          let stat = await fs.promise.stat(filePath)
          if (stat.isDirectory() && recursive) {
            console.log(filePath)
            if (filePath !== '/Users/rshah4/node-projects/clis/node_modules') ls(filePath)
          } else {
            console.log(filePath)
          }
        }
      }
    } else {
      process.stdout.write('no path mentioned \n')
      ls(__dirname)
    }
  } catch (err) {
    console.log('invalid path or path does not exist')
  }
}

ls(fileName[0])