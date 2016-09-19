/* eslint no-console: "off" */
import config from '../def/config'

class Util {
  /**
   * @constructor
   */
  constructor() {
    throw new Error('Can not create instance.')
  }

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  static isString(arg) {
    return typeof arg === 'string'
  }

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  static isBoolean(arg) {
    return typeof arg === 'boolean'
  }

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  static isNumber(arg) {
    return typeof arg === 'number'
  }

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  static isObject(arg) {
    return typeof arg === 'object' && arg !== null && !Array.isArray(arg)
  }

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  static isArray(arg) {
    return Array.isArray(arg)
  }

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  static isEmpty(arg) {
    return typeof arg === 'undefined' || arg === null || arg === ''
  }

  /**
   * @param {*} arg
   * @returns {void}
   */
  static log(arg) {
    if (config.CONSOLE_LOG_ENABLE) {
      console.log(arg)
    }
  }
}

export default Util
