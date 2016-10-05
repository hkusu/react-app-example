/* @flow */
import ItemRepository from '../repository/ItemRepository'
import QiitaApiService from '../service/QiitaApiService'

class AppScopeProvider {
  /** @private */
  qiitaApiService: QiitaApiService
  /** @private */
  itemRepository: ItemRepository

  constructor() {
    this.qiitaApiService = new QiitaApiService()
    this.itemRepository = new ItemRepository(this.qiitaApiService)
  }

  provideQiitaApiService(): QiitaApiService {
    return this.qiitaApiService
  }

  provideItemRepository(): ItemRepository {
    return this.itemRepository
  }
}

export default new AppScopeProvider()
