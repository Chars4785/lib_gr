// const add = require('./src/calculator');
// @babel/preset-env 설피로 ES6 문법 사용 가능
import add from './src/calculator';

it("add test",() => {
  expect(add(3,5)).toBe(8)
})