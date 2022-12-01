import { compile } from './core'

export var handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ code: compile(JSON.parse(event.body)) }),
  };
};
