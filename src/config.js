export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'https://api.jackhu.top/'
  :'http://localhost:9000/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
  ? '.jackhu.top'
  : ''