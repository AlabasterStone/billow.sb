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

const array = new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96,
    1, 127, 1, 127, 3, 2, 1, 0, 7, 7, 1, 3,
    102, 105, 98, 0, 0, 10, 31, 1, 29, 0, 32, 0,
    65, 1, 76, 4, 64, 65, 1, 15, 11, 32, 0, 65,
    1, 107, 16, 0, 32, 0, 65, 2, 107, 16, 0, 106,
    15, 11
]);

console.log(array.buffer);
console.log(array.toString());
WebAssembly.instantiate(array.buffer).then(result => console.log(result.instance.exports.fib(45)))