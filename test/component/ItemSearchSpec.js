/* @flow */
import React from 'react'
import { expect, render, mount, sinon } from './../tools'
import ItemSearch from './../../src/component/ItemSearch'

describe('ItemSearch', () => {
  const testItemSearchProps = {
    defaultSearchWord: 'a',
    defaultItemDisplayNumber: 0,
    searchCount: 99,
  }

  it('allows us to set props', () => {
    const wrapper = mount(<ItemSearch {...testItemSearchProps} />)
    expect(wrapper).to.have.prop('defaultSearchWord').equal('a')
    expect(wrapper).to.have.prop('defaultItemDisplayNumber').equal(0)
    expect(wrapper).to.have.prop('searchCount').equal(99)
  })

  it('calls itemSearchAction', () => {
    const wrapper = mount(<ItemSearch {...testItemSearchProps} />)
    const stub = sinon.stub(wrapper.instance(), 'itemSearchAction')
    stub.resolves()
    wrapper.setState({ searchable: true })
    wrapper.find('form').simulate('submit')
    expect(stub).to.have.been.callCount(1)
    stub.restore()
  })

  it('renders content', () => {
    const wrapper = render(<ItemSearch {...testItemSearchProps} />)
    expect(wrapper).to.contain.text('99 回 検索しました')
  })
})
