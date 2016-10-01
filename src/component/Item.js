/* @flow */
import React from 'react'

const Item = (props: {
  userProfileImageUrl: string,
  url: string,
  title: string,
  updatedAdInWords: string,
  stockCount: number,
}): any => (
  <tr>
    <td width="100">
      <img src={props.userProfileImageUrl} alt="アイコン" width="80" />
    </td>
    <td width="300">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.title}
      </a>
    </td>
    <td width="100">
      {props.updatedAdInWords}前
    </td>
    <td width="100">
      {props.stockCount}ストック
    </td>
  </tr>
)

export default Item
