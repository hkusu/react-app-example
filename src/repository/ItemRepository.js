/* @flow */
import QiitaApiService from './../service/QiitaApiService'

class ItemRepository {
  /** @private */
  qiitaApiService: QiitaApiService

  constructor(qiitaApiService: QiitaApiService) {
    this.qiitaApiService = qiitaApiService
  }

  getItemByWord(searchWord: string, perPage: number): Promise<Object> {
    return this.qiitaApiService.search(searchWord, perPage)
  }
}

export default ItemRepository
