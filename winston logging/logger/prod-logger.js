const { format, createLogger, transports } = require('winston');
const { timestamp, combine, errors, json , prettyPrint} = format;

function buildProdLogger() {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    //Another format refference
    // format: format.combine(
    //   timestamp(),
    //   // prettyPrint(),
    //   format.splat(),
    //   format.simple()
    // ),
    // defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
  });
}

module.exports = buildProdLogger;