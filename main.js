export const getObjectProperty = (object, path, defaultValue = '', isDate = false) => {
  let nestleList = path.split('.')
  let obj = object
  for (let nestle in nestleList) {
    if (typeof obj === 'undefined' || !obj) { return defaultValue }
    obj = obj[nestleList[nestle]]
  }
  return isDate ? moment.unix(obj).format('YYYY-MM-DD') : obj
}
