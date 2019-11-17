// eslint-disable-next-line
export const isProduction = !!__DEV__
export const uri = isProduction
  ? 'https://api.lois.pro/v1'
  : 'http://192.168.1.53:3001/v1'
// eslint-disable-next-line
export const botName = isProduction ? 'loisprobot' : 'kurlyk777bot'
export const tasksPerPage = 30
export const adUnitID = 'ca-app-pub-7931113751587640/8219766994'
export const minorCompatibility = 2
