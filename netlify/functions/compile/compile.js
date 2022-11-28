const core = require('../../../billow/core');

exports.handler = async function (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: core.hello("Billow") }),
    };
  };
  