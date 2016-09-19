import type { ConfigType } from './types'

const env = process.env.CONFIG

const configs = {
  config: {
    QIITA_BASE_URL: 'https://qiita.com/api/v1',
    CONSOLE_LOG_ENABLE: true,
  },
  production: {
    CONSOLE_LOG_ENABLE: false,
  },
  staging: {
  },
  development1: {
  },
  development2: {
    QIITA_BASE_URL: `http://localhost:${location.port}/data`,
  },
  spec: {
    QIITA_BASE_URL: `http://localhost:${location.port}/data`,
  },
}

const config: ConfigType = configs.config

if (typeof configs[env] === 'undefined') {
  throw new Error('process.env.CONFIG is not defined.')
} else {
  Object.assign(configs.config, configs[env])
}

export default config
