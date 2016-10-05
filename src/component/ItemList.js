/* @flow */
import React from 'react'
import Item from './Item'
import type { ItemType } from '../definition/types'

const ItemList = (props: {
  items: ItemType[],
  loading: boolean,
}) => (
  <div>
    {
      props.loading ?
        <font size="1">
          Loading...
        </font>
        :
        ''
    }
    <table>
      <tbody>
        {
          props.items.map((item: ItemType) => (
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

export default ItemList
