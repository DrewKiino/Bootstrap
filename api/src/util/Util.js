import util from 'util'

function Log(value) {
  console.log(util.inspect(value, false, null, true ))
}

exports.Log = Log

exports.getArgs = () => {
  const args = process.argv.reduce((o, arg) => {
    const value = arg.split('=')
    const key = value[0].replace('--', '')
    if (value.length === 1) {
      return Object.assign(o, {
        [key]: true,
      })
    } else {
      return Object.assign(o, {
        [key]: value[1],
      })
    }
  }, {})
  return args
}

exports.throwIfNil = (result, identifier) => {
  if (!result) {
    throw Error(identifier + ' is undefined')
  }
  return result
}
