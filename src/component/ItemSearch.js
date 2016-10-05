/* @flow */
// noinspection JSUnresolvedVariable
import React, { Component } from 'react'
// noinspection JSUnresolvedVariable
import { dispatcher } from 'react-dispatcher-decorator'
import * as itemActions from '../action/itemActions'
import Util from './../util/Util'
import type { ReactElementType } from '../definition/types'

@dispatcher
class ItemSearch extends Component {
  state: {
    searchable: boolean,
  } = {
    searchable: false,
  }

  props: {
    defaultSearchWord: string,
    defaultItemDisplayNumber: number,
    searchCount: number,
  }

  searchWordRef: Object
  itemDisplayNumberRef: Object

  itemSearchAction = itemActions.itemSearchAction // have reference for test

  handleSearch(searchWord: string, itemDisplayNumber: number) {
    if (!this.state.searchable || !searchWord) {
      return
    }
    this.itemSearchAction(this.context.dispatch, searchWord, itemDisplayNumber)
      .catch(error => Util.log(error))
  }

  render(): ReactElementType {
    const { searchable } = this.state
    const { defaultSearchWord, defaultItemDisplayNumber, searchCount } = this.props

    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          this.handleSearch(
            this.searchWordRef.value.trim(),
            Number(this.itemDisplayNumberRef.value))
        }}
      >
        <input
          type="text"
          placeholder="検索ワード"
          defaultValue={defaultSearchWord}
          autoFocus="true"
          ref={ref => { this.searchWordRef = ref }}
          onChange={e =>
            this.setState({ searchable: !!e.target.value.trim() })
          }
        />
        &nbsp;
        <input type="submit" value="検索" disabled={!searchable} />
        &nbsp;&nbsp;
        <select
          onChange={() =>
            this.handleSearch(
              this.searchWordRef.value.trim(),
              Number(this.itemDisplayNumberRef.value))
          }
          defaultValue={defaultItemDisplayNumber}
          ref={ref => { this.itemDisplayNumberRef = ref }}
        >
          <option value="5">5件</option>
          <option value="10">10件</option>
          <option value="20">20件</option>
          <option value="50">50件</option>
          <option value="100">100件</option>
        </select>
        &nbsp;&nbsp;
        <font size="1">
          {searchCount} 回 検索しました
        </font>
      </form>
    )
  }
}

export default ItemSearch
