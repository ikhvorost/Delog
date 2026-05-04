import Delog from "../dist/delog"

const logger = new Delog();

test('Delog should work in jest', function () {
  logger.log('log');
  logger.trace('trace');
  logger.debug('debug');
  logger.info('info');
  logger.warn('warn');
  logger.error('error');
  logger.assert(false, 'assert');
  logger.fault('fault');
})