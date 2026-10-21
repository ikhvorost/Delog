import Delog from "../dist/index"

test('All levels', function () {
  const logger = new Delog();
  expect(logger.log('log')?.message).toBe('log');
  logger.trace('trace');
  logger.debug('debug');
  logger.info('info');
  logger.warn('warn');
  logger.error('error');
  logger.assert(false, 'assert');
  logger.fault('fault');
})

test('disabled', function () {
  const log = Delog.disabled;
  expect(log.debug('debug')).toBe(undefined);
})