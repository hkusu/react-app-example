/* @flow */
import React from 'react'
import { expect, render, shallow, mount } from './../tools'
import ItemList from './../../src/component/ItemList'
import Item from './../../src/component/Item'

describe('ItemList', () => {
  const testItems = [
    {
      uuid: 1,
      user: {
        profile_image_url: '1-a',
      },
      title: '1-b',
      url: '1-c',
      updated_at_in_words: '1-d',
      stock_count: 0,
    },
    {
      uuid: 2,
      user: {
        profile_image_url: '2-a',
      },
      title: '2-b',
      url: '2-c',
      updated_at_in_words: '2-d',
      stock_count: 1,
    },
  ]

  const testItemListProps = {
    items: testItems,
    loading: true,
  }

  it('allows us to set props', () => {
    const wrapper = mount(<ItemList {...testItemListProps} />)
    expect(wrapper).to.have.prop('items').equal(testItems)
    expect(wrapper).to.have.prop('loading').equal(true)
  })

  it('renders two ItemSearch components', () => {
    const wrapper = shallow(<ItemList {...testItemListProps} />)
    expect(wrapper.find(Item)).to.be.have.length(2)
  })

  it('renders content', () => {
    const wrapper = render(<ItemList {...testItemListProps} />)
    expect(wrapper).to.contain.text('Loading...')
    expect(wrapper).to.contain.text('1ストック')
  })
})

