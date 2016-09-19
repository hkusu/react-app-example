/* eslint no-new: "off" */
import { expect } from './../tools'
import Immutable from './../../src/util/Immutable'

describe('Immutable', () => {
  it('throw Error if to create an instance', () => {
    expect(() => { new Immutable() }).to.throw(Error)
  })

  describe('.copy', () => {
    it('throw TypeError if argument is not a object/array', () => {
      expect(() => {
        Immutable.copy(123)
      }).to.throw(TypeError)
    })

    it('make a copy (object)', () => {
      const originObj = {
        a: 'A',
        b: 'B',
        c: 'C',
      }

      const obj = Immutable.copy(originObj)
      expect(obj).to.eql({
        a: 'A',
        b: 'B',
        c: 'C',
      })
      expect(obj).to.not.equal(originObj)
    })

    it('make a copy (array)', () => {
      const originArr = [
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ]

      const arr = Immutable.copy(originArr)
      expect(arr).to.eql([
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ])
      expect(arr).to.not.equal(originArr)
    })
  })

  describe('.set', () => {
    it('throw TypeError if first argument is not a object', () => {
      expect(() => {
        Immutable.set(123, {})
      }).to.throw(TypeError)
    })

    it('throw TypeError if second argument is not a object', () => {
      expect(() => {
        Immutable.set({}, 123)
      }).to.throw(TypeError)
    })

    it('make a copy and update it (same key not exist)', () => {
      const originObj = {
        a: 'A',
        b: 'B',
        c: 'C',
      }

      const obj = Immutable.set(originObj, { d: 'D' })
      expect(obj).to.eql({
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
      })
      expect(obj).to.not.equal(originObj)
    })

    it('make a copy and update it (same key exist)', () => {
      const originObj = {
        a: 'A',
        b: 'B',
        c: 'C',
      }

      const obj = Immutable.set(originObj, { a: 'D' })
      expect(obj).to.eql({
        a: 'D',
        b: 'B',
        c: 'C',
      })
      expect(obj).to.not.equal(originObj)
    })
  })

  describe('.addFirst', () => {
    it('throw TypeError if first argument is not a array', () => {
      expect(() => {
        Immutable.addFirst(123, {})
      }).to.throw(TypeError)
    })

    it('throw TypeError if second argument is not specified', () => {
      expect(() => {
        Immutable.addFirst([])
      }).to.throw(TypeError)
    })

    it('make a copy and update it', () => {
      const originArr = [
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ]

      const arr = Immutable.addFirst(originArr, { id: 99, text: 'text99' })
      expect(arr).to.eql([
        { id: 99, text: 'text99' },
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ])
      expect(arr).to.not.equal(originArr)
    })
  })

  describe('.addLast', () => {
    it('throw TypeError if first argument is not a array', () => {
      expect(() => {
        Immutable.addLast(123, {})
      }).to.throw(TypeError)
    })

    it('throw TypeError if second argument is not specified', () => {
      expect(() => {
        Immutable.addLast([])
      }).to.throw(TypeError)
    })

    it('make a copy and update it', () => {
      const originArr = [
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ]

      const arr = Immutable.addLast(originArr, { id: 99, text: 'text99' })
      expect(arr).to.eql([
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
        { id: 99, text: 'text99' },
      ])
      expect(arr).to.not.equal(originArr)
    })
  })

  describe('.updateWithObjectKey', () => {
    it('throw TypeError if first argument is not a string', () => {
      expect(() => {
        Immutable.updateWithObjectKey(123, [], {})
      }).to.throw(TypeError)
    })

    it('throw TypeError if second argument is not a array', () => {
      expect(() => {
        Immutable.updateWithObjectKey('key', 123, {})
      }).to.throw(TypeError)
    })

    it('throw TypeError if third argument is not a object', () => {
      expect(() => {
        Immutable.updateWithObjectKey('key', [], 123)
      }).to.throw(TypeError)
    })

    it('make a copy and not updated if same entry not exist', () => {
      const originArr = [
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ]

      const arr = Immutable.updateWithObjectKey('id', originArr, { id: 99, text: 'text99' })
      expect(arr).to.eql([
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ])
      expect(arr).to.not.equal(originArr)
    })

    it('make a copy and update it if same entry exist', () => {
      const originArr = [
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ]

      const arr = Immutable.updateWithObjectKey('id', originArr, { id: 1, text: 'text99' })
      expect(arr).to.eql([
        { id: 1, text: 'text99' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ])
      expect(arr).to.not.equal(originArr)
    })
  })

  describe('.removeWithObjectKey', () => {
    it('throw TypeError if first argument is not a string', () => {
      expect(() => {
        Immutable.removeWithObjectKey(123, [], {})
      }).to.throw(TypeError)
    })

    it('throw TypeError if second argument is not a array', () => {
      expect(() => {
        Immutable.removeWithObjectKey('key', 123, {})
      }).to.throw(TypeError)
    })

    it('throw TypeError if third argument is not a object', () => {
      expect(() => {
        Immutable.removeWithObjectKey('key', [], 123)
      }).to.throw(TypeError)
    })

    it('make a copy and not updated if same entry not exist', () => {
      const originArr = [
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ]

      const arr = Immutable.removeWithObjectKey('id', originArr, { id: 99, text: 'text99' })
      expect(arr).to.eql([
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ])
      expect(arr).to.not.equal(originArr)
    })

    it('make a copy and update it if same entry exist', () => {
      const originArr = [
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ]

      const arr = Immutable.removeWithObjectKey('id', originArr, { id: 1, text: 'text99' })
      expect(arr).to.eql([
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
      ])
      expect(arr).to.not.equal(originArr)
    })
  })

  describe('.sortAscWithObjectKey', () => {
    it('throw TypeError if first argument is not a string', () => {
      expect(() => {
        Immutable.sortAscWithObjectKey(123, [])
      }).to.throw(TypeError)
    })

    it('throw TypeError if second argument is not a array', () => {
      expect(() => {
        Immutable.sortAscWithObjectKey('key', 123)
      }).to.throw(TypeError)
    })

    it('make a copy and update it', () => {
      const originArr = [
        { id: 1, text: 'text1' },
        { id: 4, text: 'text4' },
        { id: 3, text: 'text3' },
        { id: 2, text: 'text2' },
        { id: 5, text: 'text5' },
      ]

      const arr = Immutable.sortAscWithObjectKey('id', originArr)
      expect(arr).to.eql([
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
        { id: 4, text: 'text4' },
        { id: 5, text: 'text5' },
      ])
      expect(arr).to.not.equal(originArr)
    })
  })

  describe('.sortDescWithObjectKey', () => {
    it('throw TypeError if first argument is not a string', () => {
      expect(() => {
        Immutable.sortDescWithObjectKey(123, [])
      }).to.throw(TypeError)
    })

    it('throw TypeError if second argument is not a array', () => {
      expect(() => {
        Immutable.sortDescWithObjectKey('key', 123)
      }).to.throw(TypeError)
    })

    it('make a copy and update it', () => {
      const originArr = [
        { id: 1, text: 'text1' },
        { id: 4, text: 'text4' },
        { id: 3, text: 'text3' },
        { id: 2, text: 'text2' },
        { id: 5, text: 'text5' },
      ]

      const arr = Immutable.sortDescWithObjectKey('id', originArr)
      expect(arr).to.eql([
        { id: 5, text: 'text5' },
        { id: 4, text: 'text4' },
        { id: 3, text: 'text3' },
        { id: 2, text: 'text2' },
        { id: 1, text: 'text1' },
      ])
      expect(arr).to.not.equal(originArr)
    })
  })
})
