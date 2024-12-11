#!/usr/bin/node
const assert = require('assert');
const add = require('../src/add.js');
const { expect } = require('chai');


describe('add function', function() {
  it('add two integer number', function() {
    const result = add(2, 2);
    //assert.equal(result, 4);
    expect(result).to.be.eq(4)
  });

  it('it should be able to use one number arg', ()=> {
    const result = add(2);
    expect(result).to.be.eq(2);
  })

  it('it should return 0 if any of the arg is a number', ()=> {
    const result = add(2, "hello");
    expect(result).to.be.eq(0);
  })
});



