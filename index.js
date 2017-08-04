#! /usr/bin/env node

'use strict';

const program = require('commander');
const watsodoro = require('./lib/watsodoro');

program
  .version('0.1.0')
  .option('start', 'Start watsodoro timer')
  .parse(process.argv);

if (program.start) {
  watsodoro.start(program.args);
  process.on('SIGINT', () => {
    watsodoro.cancel();
    process.exit();
  });
}
