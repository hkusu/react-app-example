/* @flow */
/* eslint class-methods-use-this: "off" */
import axios from 'axios'
import config from '../definition/config'

class QiitaApiService {
  search(searchWord: string, perPage: number = 10): Promise<Object> {
    return this.httpGet(`search?q=${searchWord}&per_page=${perPage}`)
  }

  /** @private */
  httpGet(query: string): Promise<Object> {
    return axios.get(`${config.QIITA_BASE_URL}/${query}`)
  }
}

export default QiitaApiService
