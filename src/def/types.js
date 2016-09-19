/* @flow */
export type ItemType = {
  uuid: number,
  user: {
    profile_image_url: string,
  },
  title: string,
  url: string,
  updated_at_in_words: string,
  stock_count: number,
}

export type ConfigType = {
  QIITA_BASE_URL: string,
  CONSOLE_LOG_ENABLE: bool,
}
