'use strict';

const { execSync } = require('child_process');
const player = require('play-sound')();
const config = require('../config/config.json');

const watsonCmd = 'watson';

function toMs(minutes) {
  return minutes * 60000;
}
function alarm(message) {
  console.log(message);
  player.play(`${__dirname}/../assets/alarm.mp3`);
}
function watson(args, inherit = true) {
  if (inherit) {
    return execSync(`${watsonCmd} ${args}`, { stdio: 'inherit' });
  }
  return execSync(`${watsonCmd} ${args}`).toString();
}

exports.start = (args) => {
  if (args.length) {
    watson(`start ${args.join(' ')}`);
  } else {
    watson('restart');
  }
  console.log(`${config.work} minute watsodoro started`);
  setTimeout(() => {
    watson('stop');
    alarm(`watsodoro ended, have a ${config.break} minute break`);
    setTimeout(() => {
      alarm('break ended');
    }, toMs(config.break));
  }, toMs(config.work));
};
exports.cancel = () => {
  if (watson('status', false) !== 'No project started\n') {
    watson('cancel');
  }
};
