/* eslint no-unused-expressions: "off" */
/* eslint no-new: "off" */
import { expect } from './../tools'
import Util from '../../src/utility/Util'

describe('Util', () => {
  it('throw Error if to create an instance', () => {
    expect(() => { new Util() }).to.throw(Error)
  })

  describe('.isString', () => {
    const targetFunc = Util.isString

    it('be true if string', () => {
      expect(targetFunc('ABC')).to.be.true
    })
    it('be true if empty string', () => {
      expect(targetFunc('')).to.be.true
    })
    it('be false if number', () => {
      expect(targetFunc(123)).to.be.false
    })
    it('be false when bool', () => {
      expect(targetFunc(true)).to.be.false
    })
    it('be false when null', () => {
      expect(targetFunc(null)).to.be.false
    })
    it('be false when undefined', () => {
      let arg
      expect(targetFunc(arg)).to.be.false
    })
    it('be false if array', () => {
      expect(targetFunc([1, 2, 3])).to.be.false
    })
    it('be false if empty array', () => {
      expect(targetFunc([])).to.be.false
    })
    it('be false if object', () => {
      expect(targetFunc({ a: 'A', b: 'B' })).to.be.false
    })
    it('be false if empty object', () => {
      expect(targetFunc({})).to.be.false
    })
    it('be false if function', () => {
      const arg = () => {}
      expect(targetFunc(arg)).to.be.false
    })
  })

  describe('.isBoolean', () => {
    const targetFunc = Util.isBoolean

    it('be false if string', () => {
      expect(targetFunc('ABC')).to.be.false
    })
    it('be false if empty string', () => {
      expect(targetFunc('')).to.be.false
    })
    it('be false if number', () => {
      expect(targetFunc(123)).to.be.false
    })
    it('be true when bool', () => {
      expect(targetFunc(true)).to.be.true
    })
    it('be false when null', () => {
      expect(targetFunc(null)).to.be.false
    })
    it('be false when undefined', () => {
      let arg
      expect(targetFunc(arg)).to.be.false
    })
    it('be false if array', () => {
      expect(targetFunc([1, 2, 3])).to.be.false
    })
    it('be false if empty array', () => {
      expect(targetFunc([])).to.be.false
    })
    it('be false if object', () => {
      expect(targetFunc({ a: 'A', b: 'B' })).to.be.false
    })
    it('be false if empty object', () => {
      expect(targetFunc({})).to.be.false
    })
    it('be false if function', () => {
      const arg = () => {}
      expect(targetFunc(arg)).to.be.false
    })
  })

  describe('.isNumber', () => {
    const targetFunc = Util.isNumber

    it('be false if string', () => {
      expect(targetFunc('ABC')).to.be.false
    })
    it('be false if empty string', () => {
      expect(targetFunc('')).to.be.false
    })
    it('be true if number', () => {
      expect(targetFunc(123)).to.be.true
    })
    it('be false when bool', () => {
      expect(targetFunc(true)).to.be.false
    })
    it('be false when null', () => {
      expect(targetFunc(null)).to.be.false
    })
    it('be false when undefined', () => {
      let arg
      expect(targetFunc(arg)).to.be.false
    })
    it('be false if array', () => {
      expect(targetFunc([1, 2, 3])).to.be.false
    })
    it('be false if empty array', () => {
      expect(targetFunc([])).to.be.false
    })
    it('be false if object', () => {
      expect(targetFunc({ a: 'A', b: 'B' })).to.be.false
    })
    it('be false if empty object', () => {
      expect(targetFunc({})).to.be.false
    })
    it('be false if function', () => {
      const arg = () => {}
      expect(targetFunc(arg)).to.be.false
    })
  })

  describe('.isObject', () => {
    const targetFunc = Util.isObject

    it('be false if string', () => {
      expect(targetFunc('ABC')).to.be.false
    })
    it('be false if empty string', () => {
      expect(targetFunc('')).to.be.false
    })
    it('be false if number', () => {
      expect(targetFunc(123)).to.be.false
    })
    it('be false when bool', () => {
      expect(targetFunc(true)).to.be.false
    })
    it('be false when null', () => {
      expect(targetFunc(null)).to.be.false
    })
    it('be false when undefined', () => {
      let arg
      expect(targetFunc(arg)).to.be.false
    })
    it('be false if array', () => {
      expect(targetFunc([1, 2, 3])).to.be.false
    })
    it('be false if empty array', () => {
      expect(targetFunc([])).to.be.false
    })
    it('be true if object', () => {
      expect(targetFunc({ a: 'A', b: 'B' })).to.be.true
    })
    it('be true if empty object', () => {
      expect(targetFunc({})).to.be.true
    })
    it('be false if function', () => {
      const arg = () => {}
      expect(targetFunc(arg)).to.be.false
    })
  })

  describe('.isArray', () => {
    const targetFunc = Util.isArray

    it('be false if string', () => {
      expect(targetFunc('ABC')).to.be.false
    })
    it('be false if empty string', () => {
      expect(targetFunc('')).to.be.false
    })
    it('be false if number', () => {
      expect(targetFunc(123)).to.be.false
    })
    it('be false when bool', () => {
      expect(targetFunc(true)).to.be.false
    })
    it('be false when null', () => {
      expect(targetFunc(null)).to.be.false
    })
    it('be false when undefined', () => {
      let arg
      expect(targetFunc(arg)).to.be.false
    })
    it('be true if array', () => {
      expect(targetFunc([1, 2, 3])).to.be.true
    })
    it('be true if empty array', () => {
      expect(targetFunc([])).to.be.true
    })
    it('be false if object', () => {
      expect(targetFunc({ a: 'A', b: 'B' })).to.be.false
    })
    it('be false if empty object', () => {
      expect(targetFunc({})).to.be.false
    })
    it('be false if function', () => {
      const arg = () => {}
      expect(targetFunc(arg)).to.be.false
    })
  })

  describe('.isEmpty', () => {
    const targetFunc = Util.isEmpty

    it('be false if string', () => {
      expect(targetFunc('ABC')).to.be.false
    })
    it('be true if empty string', () => {
      expect(targetFunc('')).to.be.true
    })
    it('be false if number', () => {
      expect(targetFunc(123)).to.be.false
    })
    it('be false when bool', () => {
      expect(targetFunc(true)).to.be.false
    })
    it('be true when null', () => {
      expect(targetFunc(null)).to.be.true
    })
    it('be true when undefined', () => {
      let arg
      expect(targetFunc(arg)).to.be.true
    })
    it('be false if array', () => {
      expect(targetFunc([1, 2, 3])).to.be.false
    })
    it('be false if empty array', () => {
      expect(targetFunc([])).to.be.false
    })
    it('be false if object', () => {
      expect(targetFunc({ a: 'A', b: 'B' })).to.be.false
    })
    it('be false if empty object', () => {
      expect(targetFunc({})).to.be.false
    })
    it('be false if function', () => {
      const arg = () => {}
      expect(targetFunc(arg)).to.be.false
    })
  })
})
