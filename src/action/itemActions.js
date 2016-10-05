/* @flow */
/* eslint import/prefer-default-export: "off" */
import appScopeProvider from '../provider/appScopeProvider'

export const ItemAction: Object = {
  SHOW_LOADING: Symbol(),
  REFRESH_ITEMS: Symbol(),
}

export function itemSearchAction(dispatch: Function,
                           searchWord: string,
                           itemDisplayNumber: number): Promise<> {
  const itemRepository = appScopeProvider.provideItemRepository()

  return Promise.resolve()
    .then(() => dispatch(ItemAction.SHOW_LOADING, true))
    .then(() => itemRepository.getItemByWord(searchWord, itemDisplayNumber))
    .then(aObject => dispatch(ItemAction.REFRESH_ITEMS, aObject.data))
    .then(() => dispatch(ItemAction.SHOW_LOADING, false))
}
