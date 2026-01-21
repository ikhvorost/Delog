import Delog from "../src/Delog"

const logger = new Delog();

test('Delog should work in jest', function () {
  logger.log('log');
  logger.trace('trace');
  logger.debug('debug');
})