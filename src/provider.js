/* @flow */
/* eslint import/prefer-default-export: "off" */
import ItemRepository from './repository/ItemRepository'
import QiitaApiService from './service/QiitaApiService'

export const itemRepository: ItemRepository = new ItemRepository(new QiitaApiService())
