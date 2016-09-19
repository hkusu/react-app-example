/* @flow */
import React from 'react'
import { expect, render, mount } from './../tools'
import Item from './../../src/component/Item'

describe('Item', () => {
  const testItemProps = {
    userProfileImageUrl: 'a',
    url: 'b',
    title: 'c',
    updatedAdInWords: 'd',
    stockCount: 0,
  }

  it('allows us to set props', () => {
    const wrapper = mount(<Item {...testItemProps} />)
    expect(wrapper).to.have.prop('userProfileImageUrl').equal('a')
    expect(wrapper).to.have.prop('url').equal('b')
    expect(wrapper).to.have.prop('title').equal('c')
    expect(wrapper).to.have.prop('updatedAdInWords').equal('d')
    expect(wrapper).to.have.prop('stockCount').equal(0)
  })

  it('renders content', () => {
    const wrapper = render(<Item {...testItemProps} />)
    expect(wrapper).to.contain.text('0ストック')
  })
})
