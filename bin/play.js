#! /usr/bin/env node

let path = require('path')
let exec = require('child_process').exec;

let filepath = path.join(__dirname, '/tic-tac-toe.jar');
let cmd = 'java -jar ' + filepath;

let child = exec(cmd, {async: true});

child.stdout.on('data', (data) => {
    console.log(data)
})

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let chunk = process.stdin.read();
  if (chunk === null) return;

  try {
    child.stdin.write(chunk);
  } catch (error) {
    console.log(error)
  }
});

process.on('SIGINT', () => {
    exec('clear')
});

process.on('SIGTERM', () => {
    exec('clear')
});

child.on('close', function(code) {
    process.exit(code);
});
