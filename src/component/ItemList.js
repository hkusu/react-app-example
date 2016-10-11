/* @flow */
// noinspection JSUnresolvedVariable
import React, { Component } from 'react'
import Item from './Item'
import type { ItemType, ReactElementType } from '../definition/types'

class ItemList extends Component {
  props: {
    items: ItemType[],
    loading: boolean,
  }

  render(): ReactElementType {
    const { items, loading } = this.props

    return (
      <div>
        {
          loading ?
            <font size="1">
              Loading...
            </font>
            :
            ''
        }
        <table>
          <tbody>
            {
              items.map((item: ItemType) => (
                <Item
                  key={item.uuid}
                  userProfileImageUrl={item.user.profile_image_url}
                  title={item.title}
                  url={item.url}
                  updatedAdInWords={item.updated_at_in_words}
                  stockCount={item.stock_count}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ItemList
