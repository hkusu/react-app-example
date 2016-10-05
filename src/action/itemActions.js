/* @flow */
/* eslint import/prefer-default-export: "off" */
import { ActionKey } from '../def/keys'
import appScopeProvider from '../provider/appScopeProvider'

export function itemSearchAction(dispatch: Function,
                           searchWord: string,
                           itemDisplayNumber: number): Promise<> {
  const itemRepository = appScopeProvider.provideItemRepository()

  return Promise.resolve()
    .then(() => dispatch(ActionKey.SHOW_LOADING, true))
    .then(() => itemRepository.getItemByWord(searchWord, itemDisplayNumber))
    .then(aObject => dispatch(ActionKey.REFRESH_ITEMS, aObject.data))
    .then(() => dispatch(ActionKey.SHOW_LOADING, false))
}
