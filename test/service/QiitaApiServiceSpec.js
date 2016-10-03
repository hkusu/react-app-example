/* @flow */
import { expect, sinon } from './../tools'
import QiitaApiService from './../../src/service/QiitaApiService'

describe('QiitaApiService', () => {
  let qiitaApiService: QiitaApiService

  before(() => {
    qiitaApiService = new QiitaApiService()
  })

  describe('#search', () => {
    let qiitaApiServiceHttpGetStub

    before(() => {
      qiitaApiServiceHttpGetStub = sinon.stub(qiitaApiService, 'httpGet')
      qiitaApiServiceHttpGetStub.resolves({ result: 'success' })
    })

    after(() => {
      qiitaApiServiceHttpGetStub.restore()
    })

    it('be fulfilled', done => {
      expect(qiitaApiService.search('abc', 99)).to.be.fulfilled
        .then(result => {
          expect(qiitaApiServiceHttpGetStub).to.have.been.calledWith(
            'search?q=abc&per_page=99'
          )
          expect(result).to.eql({ result: 'success' })
        })
        .then(done, done)
    })
  })
})
