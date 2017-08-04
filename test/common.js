'use strict';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const Chance = require('chance');

const expect = chai.expect;
chai.use(sinonChai);
chai.use(chaiAsPromised);

const chance = new Chance();

module.exports = {
  sinon,
  expect,
  chance,
};
