/* @flow */
import { expect, sinon } from './../tools'
import ItemRepository from './../../src/repository/ItemRepository'
import QiitaApiService from './../../src/service/QiitaApiService'

describe('ItemRepository', () => {
  let itemRepository: ItemRepository
  let qiitaApiService: QiitaApiService

  before(() => {
    qiitaApiService = new QiitaApiService()
    itemRepository = new ItemRepository(qiitaApiService)
  })

  describe('#getItemByWord', () => {
    let qiitaApiServiceSearchStub

    before(() => {
      qiitaApiServiceSearchStub = sinon.stub(qiitaApiService, 'search')
      qiitaApiServiceSearchStub.resolves({ result: 'success' })
    })

    after(() => {
      qiitaApiServiceSearchStub.restore()
    })

    it('be fulfilled', done => {
      expect(itemRepository.getItemByWord('abc', 99)).to.be.fulfilled
        .then(result => {
          expect(qiitaApiServiceSearchStub).to.have.been.calledWith(
            'abc',
            99
          )
          expect(result).to.eql({ result: 'success' })
        })
        .then(done, done)
    })
  })
})
