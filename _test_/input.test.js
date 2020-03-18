'use strict';

const input = require('../lib/input.js');

// bad inputs 
const badInput1 = [];
const badInput2 = ['Wrong'];
const badInput3 = ['-c', 'Wrong'];
const badInput4 = ['-a', ''];

// good inputs
const goodInput = ['-a', 'This is a good note'];

describe('bad input handler', () =>{
  it('handle empty input', () =>{
    let result = new input(badInput1);
    expect(result.valid()).toBeFalsey()
  })
  it('handle wrong input', () =>{
    let result = new input(badInput2);
    expect(result.valid()).toBeFalsey()
  })
  it('handle bad flag and bad input', () =>{
    let result = new input (badInput3);
    expect(result.valid()).toBe()
  })
  it('handle bad flag  input', () =>{
    let result = new input(badInput4);
    expect(result.valid()).toBeFalsey()
  })
})
describe('good input handler',() =>{
  it('handles good input', () => {
    let result = new input(goodInput);
    expect(result.valid()).toBeTruthy()
  })
})
 
