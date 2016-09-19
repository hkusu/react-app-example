/* @flow */
import React from 'react'
import { expect, render, shallow, mount } from './../tools'
import QiitaApp from './../../src/component/QiitaApp'
import ItemSearch from './../../src/component/ItemSearch'
import ItemList from './../../src/component/ItemList'

describe('QiitaApp', () => {
  const testQiitaAppProps = {
    defaultSearchWord: 'a',
    defaultItemDisplayNumber: 0,
  }

  it('allows us to set props', () => {
    const wrapper = mount(<QiitaApp {...testQiitaAppProps} />)
    expect(wrapper).to.have.prop('defaultSearchWord').equal('a')
    expect(wrapper).to.have.prop('defaultItemDisplayNumber').equal(0)
  })

  it('renders one ItemSearch component', () => {
    const wrapper = shallow(<QiitaApp {...testQiitaAppProps} />)
    expect(wrapper.find(ItemSearch)).to.have.length(1)
  })

  it('renders one ItemList component', () => {
    const wrapper = shallow(<QiitaApp {...testQiitaAppProps} />)
    expect(wrapper.find(ItemList)).to.have.length(1)
  })

  it('renders content', () => {
    const wrapper = render(<QiitaApp {...testQiitaAppProps} />)
    expect(wrapper).to.contain.text('0 回 検索しました')
  })

  describe('state', () => {
    it('has state', () => {
      const wrapper = shallow(<QiitaApp {...testQiitaAppProps} />)
      expect(wrapper).to.have.state('items')
      expect(wrapper).to.have.state('searchCount')
      expect(wrapper).to.have.state('loading')
    })

    it('renders content by "items"', () => {
      const items = [
        {
          uuid: 1,
          user: {
            profile_image_url: 'profile_image_url_1',
          },
          title: 'title_1',
          url: 'url_1',
          updated_at_in_words: 'updated_at_in_words_1',
          stock_count: 123,
        },
        {
          uuid: 2,
          user: {
            profile_image_url: 'profile_image_url_2',
          },
          title: 'title_2',
          url: 'url_2',
          updated_at_in_words: 'updated_at_in_words_2',
          stock_count: 456,
        },
      ]

      const wrapper = mount(<QiitaApp {...testQiitaAppProps} />)
      wrapper.setState({ items })
      expect(wrapper).to.contain.text('title_1')
      expect(wrapper).to.contain.text('123ストック')
      expect(wrapper).to.contain.text('title_2')
      expect(wrapper).to.contain.text('456ストック')
    })

    it('renders content by "searchCount"', () => {
      const wrapper = mount(<QiitaApp {...testQiitaAppProps} />)
      wrapper.setState({ searchCount: 99 })
      expect(wrapper).to.contain.text('99 回 検索しました')
    })

    it('renders content by "loading"', () => {
      const wrapper = mount(<QiitaApp {...testQiitaAppProps} />)
      wrapper.setState({ loading: false })
      expect(wrapper).to.not.contain.text('Loading...')
      wrapper.setState({ loading: true })
      expect(wrapper).to.contain.text('Loading...')
    })
  })
})
