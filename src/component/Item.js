/* @flow */
// noinspection JSUnresolvedVariable
import React, { PureComponent } from 'react'
import type { ReactElementType } from '../definition/types'

class Item extends PureComponent {
  props: {
    userProfileImageUrl: string,
    url: string,
    title: string,
    updatedAdInWords: string,
    stockCount: number,
  }

  render(): ReactElementType {
    const { userProfileImageUrl, url, title, updatedAdInWords, stockCount } = this.props

    return (
      <tr>
        <td width="100">
          <img src={userProfileImageUrl} alt="アイコン" width="80" />
        </td>
        <td width="300">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </td>
        <td width="100">
          {updatedAdInWords}前
        </td>
        <td width="100">
          {stockCount}ストック
        </td>
      </tr>
    )
  }
}

export default Item
