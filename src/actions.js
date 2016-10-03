/* @flow */
/* eslint import/prefer-default-export: "off" */
import { ActionKey } from './def/keys'
import appModule from './appModule'

export function itemSearchAction(dispatch: Function,
                           searchWord: string,
                           itemDisplayNumber: number): Promise<> {
  const itemRepository = appModule.provideItemRepository()

  return Promise.resolve()
    .then(() => dispatch(ActionKey.SHOW_LOADING, true))
    .then(() => itemRepository.getItemByWord(searchWord, itemDisplayNumber))
    .then(res => dispatch(ActionKey.REFRESH_ITEMS, res.data))
    .then(() => dispatch(ActionKey.SHOW_LOADING, false))
}
