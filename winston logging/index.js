let logger = require('./logger');

logger = logger.child({sessionId: '1234'})
let a = {'a':1, 'b':[2]};
logger.info('API response',{response: a});
logger.info('text warn');
logger.error('text error');