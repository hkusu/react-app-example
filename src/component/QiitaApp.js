/* @flow */
/* eslint no-use-before-define: "off" */
// noinspection JSUnresolvedVariable
import React, { Component } from 'react'
// noinspection JSUnresolvedVariable
import { subscriber } from 'react-dispatcher-decorator'
import ItemSearch from './ItemSearch'
import ItemList from './ItemList'
import { ItemAction } from '../action/itemActions'
import type { ItemType, ReactElementType } from '../def/types'

@subscriber((self: QiitaApp, subscribe) => self.subscribe(subscribe))
class QiitaApp extends Component {
  static defaultProps: {
    defaultSearchWord: string,
    defaultItemDisplayNumber: number,
  } = {
    defaultSearchWord: '',
    defaultItemDisplayNumber: 5,
  }

  state: {
    items: ItemType[],
    searchCount: number,
    loading: boolean,
  } = {
    items: [],
    searchCount: 0,
    loading: false,
  }

  props: {
    defaultSearchWord: string,
    defaultItemDisplayNumber: number,
  }

  subscribe(subscribe: Function) {
    subscribe(ItemAction.SHOW_LOADING, (loading: boolean) =>
      this.setState(
        { loading }
      )
    )

    subscribe(ItemAction.REFRESH_ITEMS, (items: ItemType[]) =>
      this.setState(
        {
          items,
          searchCount: this.state.searchCount + 1,
        }
      )
    )
  }

  render(): ReactElementType {
    const { items, searchCount, loading } = this.state
    const { defaultSearchWord, defaultItemDisplayNumber } = this.props

    return (
      <div>
        <ItemSearch
          defaultSearchWord={defaultSearchWord}
          defaultItemDisplayNumber={defaultItemDisplayNumber}
          searchCount={searchCount}
        />
        <hr />
        <ItemList
          items={items}
          loading={loading}
        />
      </div>
    )
  }
}

export default QiitaApp
