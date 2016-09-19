/* eslint no-unused-vars: "off" */
/* eslint import/no-extraneous-dependencies: "off" */
import chai, { expect as _expect } from 'chai'
import _sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import _sinonAsPromised from 'sinon-as-promised' // applied destructively
import { shallow as _shallow, mount as _mount, render as _render } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiEnzyme())

export const expect = _expect
export const sinon = _sinon
export const shallow = _shallow
export const mount = _mount
export const render = _render
