/* @flow */
// noinspection JSUnresolvedVariable
import React, { Component } from 'react'
// noinspection JSUnresolvedVariable
import { dispatcher } from 'react-dispatcher-decorator'
import * as actions from './../actions'
import Util from './../util/Util'

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

  searchWordRef: any
  itemDisplayNumberRef: any

  itemSearchAction = actions.itemSearchAction // have reference for test

  handleSearch(searchWord: string, itemDisplayNumber: number) {
    if (!this.state.searchable || !searchWord) {
      return
    }
    this.itemSearchAction(this.context.dispatch, searchWord, itemDisplayNumber)
      .catch((error: Error) => { Util.log(error) })
  }

  render(): any {
    const { searchable } = this.state
    const { defaultSearchWord, defaultItemDisplayNumber } = this.props

    return (
      <form
        onSubmit={(e: Event) => {
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
          ref={(ref: any) => { this.searchWordRef = ref }}
          onChange={(e: Object) => {
            this.setState({ searchable: !!e.target.value.trim() })
          }}
        />
        &nbsp;
        <input type="submit" value="検索" disabled={!searchable} />
        &nbsp;&nbsp;
        <select
          onChange={() => {
            this.handleSearch(
              this.searchWordRef.value.trim(),
              Number(this.itemDisplayNumberRef.value))
          }}
          defaultValue={defaultItemDisplayNumber}
          ref={(ref: any) => { this.itemDisplayNumberRef = ref }}
        >
          <option value="5">5件</option>
          <option value="10">10件</option>
          <option value="20">20件</option>
          <option value="50">50件</option>
          <option value="100">100件</option>
        </select>
        &nbsp;&nbsp;
        <font size="1">
          {this.props.searchCount} 回 検索しました
        </font>
      </form>
    )
  }
}

export default ItemSearch
