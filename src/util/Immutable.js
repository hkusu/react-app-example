import Util from './Util'

const TYPE_ERROR_MESSAGE_DEFAULT = 'Invalid argument.'
const NO_PARAM = Symbol()

class Immutable {
  /**
   * @constructor
   */
  constructor() {
    throw new Error('Can not create instance.')
  }

  /**
   * @param {object|Array} arg
   * @returns {object|Array}
   */
  static copy(arg) {
    if (!Util.isObject(arg) && !Util.isArray(arg)) {
      throw new TypeError(TYPE_ERROR_MESSAGE_DEFAULT)
    }
    if (Util.isObject(arg)) {
      return Object.assign({}, arg)
    }
    return [...arg]
  }

  /**
   * @param {object} obj
   * @param {object} entry
   * @returns {object}
   */
  static set(obj, entry) {
    if (!Util.isObject(obj) || !Util.isObject(entry)) {
      throw new TypeError(TYPE_ERROR_MESSAGE_DEFAULT)
    }
    return Object.assign({}, obj, entry)
  }

  /**
   * @param {Array} arr
   * @param {*} entry
   * @returns {Array}
   */
  static addFirst(arr, entry = NO_PARAM) {
    if (!Util.isArray(arr) || entry === NO_PARAM) {
      throw new TypeError(TYPE_ERROR_MESSAGE_DEFAULT)
    }
    return [entry, ...arr]
  }

  /**
   * @param {Array} arr
   * @param {*} entry
   * @returns {Array}
   */
  static addLast(arr, entry = NO_PARAM) {
    if (!Util.isArray(arr) || entry === NO_PARAM) {
      throw new TypeError(TYPE_ERROR_MESSAGE_DEFAULT)
    }
    return [...arr, entry]
  }

  /**
   * @param {string} key
   * @param {Array} arr
   * @param {object} obj
   * @returns {Array}
   */
  static updateWithObjectKey(key, arr, obj) {
    if (!Util.isString(key) || !Util.isArray(arr) || !Util.isObject(obj)) {
      throw new TypeError(TYPE_ERROR_MESSAGE_DEFAULT)
    }
    return arr.map((entry) => {
      if (!Util.isNumber(entry[key]) && !Util.isString(entry[key])) {
        return entry
      }
      if (!Util.isNumber(obj[key]) && !Util.isString(obj[key])) {
        return entry
      }
      return entry[key] === obj[key] ? obj : entry
    })
  }

  /**
   * @param {string} key
   * @param {Array} arr
   * @param {object} obj
   * @returns {Array}
   */
  static removeWithObjectKey(key, arr, obj) {
    if (!Util.isString(key) || !Util.isArray(arr) || !Util.isObject(obj)) {
      throw new TypeError(TYPE_ERROR_MESSAGE_DEFAULT)
    }
    return arr.filter((entry) => {
      if (!Util.isNumber(entry[key]) && !Util.isString(entry[key])) {
        return true
      }
      if (!Util.isNumber(obj[key]) && !Util.isString(obj[key])) {
        return true
      }
      return entry[key] !== obj[key]
    })
  }

  /**
   * @param {string} key
   * @param {Array} arr
   * @returns {Array}
   */
  static sortAscWithObjectKey(key, arr) {
    if (!Util.isString(key) || !Util.isArray(arr)) {
      throw new TypeError(TYPE_ERROR_MESSAGE_DEFAULT)
    }
    const rtn = [...arr] // copy
    return rtn.sort((obj1, obj2) => {
      if (!Util.isNumber(obj1[key]) || !Util.isNumber(obj2[key])) {
        return -1
      }
      return obj1[key] - obj2[key]
    })
  }

  /**
   * @param {string} key
   * @param {Array} arr
   * @returns {Array}
   */
  static sortDescWithObjectKey(key, arr) {
    if (!Util.isString(key) || !Util.isArray(arr)) {
      throw new TypeError(TYPE_ERROR_MESSAGE_DEFAULT)
    }
    const rtn = [...arr] // copy
    return rtn.sort((obj1, obj2) => {
      if (!Util.isNumber(obj1[key]) || !Util.isNumber(obj2[key])) {
        return -1
      }
      return obj2[key] - obj1[key]
    })
  }
}

export default Immutable
