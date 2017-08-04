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
function watson(args) {
  return execSync(`${watsonCmd} ${args}`).toString();
}

exports.start = (args) => {
  let watsonOutput;
  if (args.length) {
    watsonOutput = watson(`start "${args.join(' ')}"`);
  } else {
    watsonOutput = watson('restart');
  }
  console.log(`${watsonOutput}\n${config.work} minute watsodoro started`);
  setTimeout(() => {
    console.log(watson('stop'));
    alarm(`watsodoro ended, have a ${config.break} minute break`);
    setTimeout(() => {
      alarm('break ended');
    }, toMs(config.break));
  }, toMs(config.work));
};
exports.cancel = () => {
  console.log(watson('cancel'));
};
