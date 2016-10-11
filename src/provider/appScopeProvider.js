/* @flow */
/* eslint class-methods-use-this: "off" */
import ItemRepository from '../repository/ItemRepository'
import QiitaApiService from '../service/QiitaApiService'

class AppScopeProvider {
  /** @private */
  qiitaApiService: QiitaApiService
  /** @private */
  itemRepository: ItemRepository

  /** @private */
  createQiitaApiService(): QiitaApiService {
    return new QiitaApiService()
  }

  /** @private */
  createItemRepository(): ItemRepository {
    return new ItemRepository(this.provideQiitaApiService())
  }

  provideQiitaApiService(): QiitaApiService {
    if (!this.qiitaApiService) {
      return this.createQiitaApiService()
    }
    return this.qiitaApiService
  }

  provideItemRepository(): ItemRepository {
    if (!this.itemRepository) {
      return this.createItemRepository()
    }
    return this.itemRepository
  }
}

export default new AppScopeProvider()
