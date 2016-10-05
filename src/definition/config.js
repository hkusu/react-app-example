import type { ConfigType } from './types'

const env = process.env.CONFIG

const configs = {
  config: {
    QIITA_BASE_URL: 'https://qiita.com/api/v1',
    CONSOLE_LOG_ENABLE: false,
  },
  production: {
  },
  development: {
    CONSOLE_LOG_ENABLE: true,
  },
  local: {
    CONSOLE_LOG_ENABLE: true,
  },
  localUseStub: {
    QIITA_BASE_URL: './stub',
    CONSOLE_LOG_ENABLE: true,
  },
  spec: {
    QIITA_BASE_URL: './stub',
    CONSOLE_LOG_ENABLE: true,
  },
}

const config: ConfigType = configs.config

if (typeof configs[env] === 'undefined') {
  throw new Error('process.env.CONFIG is not defined.')
} else {
  Object.assign(configs.config, configs[env])
}

export default config
