#! /usr/bin/env node

let exec = require('child_process').exec;

let child = exec('npm update -g gamesgames', function (error, stdout, stderr) {
  if (stdout.length === 0) {
    console.log('Your game is currently up to date.')
  } else if (error === null) {
    console.log('Your game was successfully updated.\n\n' + stdout);
  } else {
    console.log('Your game has failed to update.\n\n' + stderr);
  }
});
