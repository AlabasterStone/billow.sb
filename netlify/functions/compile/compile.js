import { compile } from "walt-compiler";

const buffer = compile(`
export function fib(n: i32): i32 {
  if(n<=1)
  {
    return 1;
  }
  return fib(n-1)+fib(n-2);
}
`).buffer();

export var handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ fibonacci: new Uint8Array(buffer).toString() })
  };
};
